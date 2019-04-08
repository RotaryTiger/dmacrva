/* eslint-disable */
import React, { Component } from 'react';
import isEqual from 'react-fast-compare';
import skills from '../static/skills';
import useLocalStorage from './useLocalStorage';

const Sheet = ({ toon }) => {
    // state
    const [toonName, setName] = React.useState('(Character Name)');
    const [toonImage, setImage] = React.useState('https://vignette.wikia.nocookie.net/zelda/images/1/14/Zora_Artwork_%28Ocarina_of_Time%29.png/revision/latest/scale-to-width-down/1000?cb=20110427011925')
    const [spellSlots, setSpellSlots] = React.useState([2]);
    const [pcData, setPcData] = React.useState(null);

    const [mount, didMount] = React.useState(false);

    // local storage
    const [localSheet, setLocalSheet] = useLocalStorage('breathMarchesSheet', localStorage.getItem('breathMarchesSheet'))

    const getState = () => ({
        toonName: toonName,
        toonImage: toonImage,
        spellSlots: spellSlots,
        pcData: pcData || toon
    })

    const updateLocalSheet = () => setLocalSheet(getState())

    // sync local and state
    const stateDidUpdate = () => {
        const state = getState()
        if (isEqual(localSheet, state)) {
            console.log('local is same')
            return
        }

        updateLocalSheet()
    }
    const propsDidUpdate = () => {
        setPcData(toon)
        return

        console.log('toon updated', pcData)
        if (!pcData) {
            console.log('getting random character')
            setPcData(toon)
            updateLocalSheet()
        }
    }

    // didMount
    React.useEffect(() => {
        if (!localSheet || !localSheet.pcData) {
          return;
        }
        console.log('mounted', localSheet.pcData)
        localSheet.pcData && setPcData(localSheet.pcData)
    }, [mount])

    // didUpdates
    // React.useEffect(stateDidUpdate, [pcData])
    React.useEffect(propsDidUpdate, [toon])




    if (!pcData || !pcData.proficiencies) return null

    const { raceName,
        className,
        alignment,
        abilityScores,
        hitPoints,
        proficiencies,
        equipment,
        background,
        classFeatures,
        racialFeatures, speed,
        hitDice,
        spells } = pcData

    const { skills: skillProfs } = proficiencies


    return (
        <div className="app">
            <div className="flex p-16 header">
                <div className="row flex-expand">
                    <CharacterImage src={toonImage} />
                    <ClassRaceLevel
                        toonName={toonName}
                        raceName={raceName}
                        toonClassName={className}
                        alignment={alignment}
                        onChange={setName}
                    />
                </div>
            </div>
            <div className="row">
                <div className="row flex-expand">
                    <AbilitiesScores abilityScores={abilityScores} />
                </div>
                <div className="row" style={{ justifySelf: "flex-end" }}>
                    <ProficiencyScore score={2} />
                    <Speed speed={speed} />
                    <Inspiration />
                    <HitPoints hitDice={hitDice} hitPoints={hitPoints} />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <Skills skills={skills} skillProfs={skillProfs} />
                    <Spells spells={spells} spellSLots={spellSlots} />
                </div>
                <div className="features col-8">
                    <Equipment equipment={equipment} />
                    <Background background={background} />
                    <ClassFeatures classFeatures={classFeatures} />
                    <RaceFeatures racialFeatures={racialFeatures} />
                </div>
            </div>
        </div>
    );
}

export default Sheet;


/*Components*/
const SmCard = ({ top, middle, bottom, bubble, children, ...props }) => (
    <div {...props}>
        <div className="col text-center smcard">
            {top && (
                <div className="smcard-top">
                    <h6>{top}</h6>
                </div>
            )}
            <div className="smcard-middle row centered">{children}</div>
            {bottom && (
                <div className="smcard-bottom">
                    <h6>{bottom}</h6>
                </div>
            )}
            {bubble && (
                <div className="bubble">
                    <div className="bubble-inner">
                        <h6>{bubble}</h6>
                    </div>
                </div>
            )}
        </div>
    </div>
);

/*CharacterImage*/
const CharacterImage = ({ src }) => (
    <div className="col">
        <img className="profile-image" src={src} />
    </div>
);

/*ClassRaceLevel*/
const ClassRaceLevel = ({ toonName, raceName, toonClassName, alignment, onChange }) => (
    <div className="col">
        <h1 className="mb-8">
            <input defaultValue={toonName} onChange={onChange} />
        </h1>
        <h3>
            {raceName} {toonClassName} ({alignment})
      </h3>
    </div>
);

/*Inspiration*/
const Inspiration = (props) => {
    const [inspired, setInspired] = React.useState(false)

    return (
        <SmCard className="inspiration" top="Inspiration" bottom="Toggle" onClick={() => setInspired(!inspired)}>
            <h3 style={{ opacity: inspired ? 1 : 0.1 }}>🔥</h3>
        </SmCard>
    )
};

/*HitPoints*/
const HitPoints = ({ hitDice, hitPoints }) => (
    <div className="col">
        <div className="hitpoints card centered">
            <div className="col">
                <div className="row centered text-center">
                    <div className="col">
                        <h6>Current</h6>
                        <div className="fraction">
                            <input defaultValue={hitPoints} />
                        </div>
                    </div>
                    <div className="fraction">
                        <h2 className="align-end">/</h2>
                    </div>

                    <div className="col">
                        <h6>Max</h6>
                        <div className="fraction">
                            <h3>{hitPoints}</h3>
                        </div>
                    </div>
                </div>
                <div className="row centered text-center">
                    <h5>Hit Points</h5>
                </div>
            </div>
        </div>
    </div>
);

/*AbilitiesScores*/
const AbilitiesScores = ({ abilityScores }) => (
    <div className="row">
        <ScoreCard label={"STR"} {...abilityScores.STR} />
        <ScoreCard label={"DEX"} {...abilityScores.DEX} />
        <ScoreCard label={"CON"} {...abilityScores.CON} />
        <ScoreCard label={"INT"} {...abilityScores.INT} />
        <ScoreCard label={"WIS"} {...abilityScores.WIS} />
        <ScoreCard label={"CHA"} {...abilityScores.CHA} />
    </div>
);

const ScoreCard = ({ label, score, mod }) => (
    <SmCard className="score-card" top={label} bubble={score}>
        <SignScore score={mod} />
    </SmCard>
);

const SignScore = ({ score }) => (
    <h3>
        <span className="sign">{score >= 0 ? "+" : "-"}</span> {Math.abs(score)}
    </h3>
);

/*Proficiencies*/
const ProficiencyScore = ({ score }) => (
    <SmCard className="prof-score" top="Proficency" bottom="Bonus">
        <SignScore score={score} />
    </SmCard>
);

/*Speed*/
const Speed = ({ speed }) => (
    <SmCard className="speed" top="Walking" bottom="Speed">
        <h3>{speed} ft</h3>
    </SmCard>
);

/*Skills*/
const Skills = ({ skillProfs, skills }) => (
    <div className="card mb-16">
        {skills.map(({ name, ability }, i) => (
            <Skill key={i} name={name} mod={ability} isProf={skillProfs.indexOf(name) > -1} />
        ))}
    </div>
);

const Skill = ({ name, isProf, mod }) => (
    <div className="row">
        <h5 className={`mb-8 ${isProf ? "bold" : ""}`}>
            {name} ({mod})
      </h5>
    </div>
);

/*Features*/
const ClassFeatures = ({ classFeatures }) => (
    <div className="features-class">
        <div className="card mb-16">
            <h2>Class Features</h2>
            <hr />
            {classFeatures.map((feature, i) => <Feature {...feature} key={i} />)}
        </div>
    </div>
);

const RaceFeatures = ({ racialFeatures }) => (
    <div className="features-race">
        <div className="card mb-16">
            <h2>Racial Features</h2>
            <hr />
            {racialFeatures.map((feature, i) => <Feature {...feature} key={i} />)}
        </div>
    </div>
);

const Feature = ({ name, description }) => {
    return (
        <div className="col mb-16">
            <a target="_blank" href={`https://dnd5e.fandom.com/wiki/Special:Search?query=${name}`}><h4 className="mb-8 bold">{name}</h4></a>
            <p>{description}</p>
        </div>
    )
};

const Equipment = ({ equipment }) => {
    const defaultValue = equipment.join('\r\n');
    return (
        <div className="equipment">
            <div className="card mb-16">
                <h2>Equipment</h2>
                <hr />
                <textarea defaultValue={defaultValue} />
            </div>
        </div>
    )
}

const Spells = ({ spells, spellSlots }) => spells ? (
    <div className="features-race">
        <div className="card mb-16">
            <h2>Spells</h2>
            <hr />
            {spells.cantrips.map((spell, i) => <Feature name={`(C) ${spell}`} key={i} />)}
            <hr />
            <div className="row">
                <span>Spell Slots: </span>
                <SpellSlot />
                <SpellSlot />
            </div>
            <hr />
            {spells.firstLevel.map((spell, i) => <Feature name={`(I) ${spell}`} key={i} />)}
        </div>
    </div>
) : null

const SpellSlot = (props) => {
    let [slot, setSlot] = React.useState(true);

    return (
        <div className="spellslot" >
            <input type="checkbox" checked={slot ? true : undefined} onChange={() => setSlot(!slot)} />
        </div>
    )
}

/*Background*/
const Background = ({ background }) => {
    const defaultValue = JSON.stringify(background, null, 2);
    const {
      trait,
      ideal,
      bond,
      flaw,
      others,
      backgroundName,
      backgroundFeature,
    } = background;

    let otherFeatures;
    if (others && others.length > 0) {
      otherFeatures = others.map((other, i) => {
        const [name, description] = other.split(':');
        return <Feature key={i} name={name} description={description} />
      });
    }

    return (
        <div className="background">
            <div className="card mb-16">
                <h2>Background: {backgroundName}</h2>
                <hr />
                <Feature name="Trait" description={trait} />
                <Feature name="Ideal" description={ideal} />
                <Feature name="Bond" description={bond} />
                <Feature name="Flaw" description={flaw} />
                { (otherFeatures && otherFeatures.length > 0) &&
                  <div>
                    <hr />
                    {otherFeatures}
                  </div>
                }
                <hr />
                <Feature name={backgroundFeature.name} description={backgroundFeature.description} />
            </div>
        </div>
    )
}

/*Proficiencies*/
const Proficiencies = ({ background }) => {
    const defaultValue = JSON.stringify(background, null, 2);
    return (
        <div className="proficiencies">
            <div className="card mb-16">
                <h2>Background</h2>
                <hr />
                <textarea defaultValue={defaultValue} />
            </div>
        </div>
    )
}


const useMount = (mount) => React.useEffect(mount, []);

const Popup = (href) => {
    const getSearch = () => {

    }

    // didUpdate
    React.useEffect(getSearch, [href]);

    return (
        <div>
            {}
        </div>
    )
}


/*Utilities*/
const mapObject = (obj) => Object.keys(obj).map(key =>
    ({ name: key, value: obj[key] })
)
