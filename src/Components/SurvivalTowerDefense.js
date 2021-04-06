export function SurvivalTowerDefense() {
  return (
    <div>
      <h3>Survival Tower Defense (i brist på bättre titel)</h3>
      <p>
        Survival Tower Defense är ett soloprojekt i Unity som jag startade under
        sommaren 2020. Min idé var att göra ett tower defense spel med survival
        element, där man måste samla resurser som finns utspridda och flytta på
        sin bas lite som hur terran byggnader i{" "}
        <a href="https://starcraft2.com/en-us/">Starcraft II</a>
        kan lyfta och flyga runt. Jag har en liten spelbar prototyp där några av
        mekanikerna jag ville ha med finns implementerade, men har inte fortsatt
        utvecklingen på projektet sedan slutet av sommaren 2020.
      </p>
      <p>
        Jag har själv designat och programmerat spelet, observera dock att de få
        art assets som finns i spelet inte är gjorda av mig. Från ett
        programmerings-perspektiv så har jag fokuserat på att se till så att
        spelet ska kunna hantera många aktiva entiter samtidigt utan stora
        prestanda påfrestningar, bl.a. genom att implementera ett object-pool
        system för att snabbt kunna återvinna entiteter utan att behöva anropa
        prestandakrävande metoder för att skapa/förstöra gameobjects och cache:a
        referenser till deras komponenter. <br/>
        Vad gäller design så skulle jag vilja se till så att spelets mekaniker
        är så transparanta som möjligt genom att presentera all relevant
        information för spelaren när de behöver den, men min oerfarenhet av UI
        och UX design (samt min dåliga affinitet för front-end development) har
        gjort det svårt att implementera det på ett smidigt sätt.
      </p>
      <p>
        Mer information om hur spelet spelas finns tillsammans med en spelbar
        prototyp på spelets itch.io-sida som jag har länkat till lite längre ned.
      </p>
      <ul>
        <li>
          <a href="https://github.com/Aulin93/Survival-Tower-Defense">
            länk till GitHub
          </a>
        </li>
        <li>
          <a href="https://aulin93.itch.io/surival-tower-defense">
            länk till en spelbar version
          </a>
        </li>
      </ul>
    </div>
  );
}
