import { Button } from "@material-ui/core";
import { useState } from "react";
import { DestinyDiceRoller } from "./DestinyDiceRoller";
import { KeeperOfStats } from "./KeeperOfStats";
import { Porfolio } from "./Portfolio";
import { SurvivalTowerDefense } from "./SurvivalTowerDefense";

export function LandingPage() {
  const [renderKeeperOfStats, setRenderKeeperOfStats] = useState(false);
  const [renderDiceRoller, setRenderDiceRoller] = useState(false);
  const [renderTowerDefense, setRenderTowerDefense] = useState(false);
  const [renderPortfolio, setRenderPortfolio] = useState(false);

  return (
    <>
      <h1>Välkommen!</h1>
      <p>
        Hej och välkommen till Alexander Aulins e-portfolio. Jag är en
        programmerare som tycker om att ta mig an nya utmaningar. Här finner du
        några av mina projekt som jag fritt kan dela med mig av och hoppas att
        du kommer hitta något intressant i dem. Med varje projekt har jag
        försökt lära mig något nytt som jag kan dra nytta av i framtida projekt,
        jag delar gärna med mig av det jag har gjort och lärt mig, så du kan
        enkelt hitta källkoden till alla projekt jag har lagt upp här. Om du har
        förslag på förbättringar eller annars vill kontakta mig så kan du maila mig på
        alex.aulin@hotmail.com
      </p>
      <h2>Mina samlade verk</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setRenderDiceRoller(true);
          setRenderKeeperOfStats(false);
          setRenderTowerDefense(false);
          setRenderPortfolio(false);
        }}
      >
        Destiny Dice Roller
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setRenderKeeperOfStats(true);
          setRenderDiceRoller(false);
          setRenderTowerDefense(false);
          setRenderPortfolio(false);
        }}
      >
        Keeper of Stats
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setRenderTowerDefense(true);
          setRenderKeeperOfStats(false);
          setRenderDiceRoller(false);
          setRenderPortfolio(false);
        }}
      >
        Survival Tower Defense Game
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setRenderPortfolio(true);
          setRenderTowerDefense(false);
          setRenderKeeperOfStats(false);
          setRenderDiceRoller(false);
        }}
      >
        Denna e-Portfolio
      </Button>
      <div hidden={renderDiceRoller ? "" : "hidden"}>
        <DestinyDiceRoller />
      </div>
      <div hidden={renderKeeperOfStats ? "" : "hidden"}>
        <KeeperOfStats />
      </div>
      <div hidden={renderTowerDefense ? "" : "hidden"}>
        <SurvivalTowerDefense />
      </div>
      <div hidden={renderPortfolio ? "" : "hidden"}>
        <Porfolio />
      </div>
    </>
  );
}
