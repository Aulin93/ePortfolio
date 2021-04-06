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
  const [renderPortfolio, setRenderPortfolio] = useState(false)

  return (
    <>
      <h1>Välkommen!</h1>
      <p>
        Hej och välkommen till Alexander Aulins e-portfolio. Jag är en
        programmerare som tycker om att ta mig an nya utmaningar. Jag har samlat
        några av mina projekt här som jag fritt kan dela med mig av och hoppas
        att du kommer hitta något intressant i dem. Om du har förslag eller
        annars vill kontakta mig så kan du maila mig på alex.aulin@hotmail.com
      </p>
      <h2>Mina samlade verk</h2>
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
    </>
  );
}
