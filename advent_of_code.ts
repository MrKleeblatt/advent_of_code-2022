function Tag_1() {
  const input = Deno.readTextFileSync("inputs/1");
  const Elfen = input.split("\n\n");
  const Elfenkalorien: number[] = [];
  Elfen.forEach((Elf) => {
    const Kalorien: number[] = Elf.split("\n").map((cal) => +cal);
    let Gesamtkalorien = 0;
    for (const cal of Kalorien) Gesamtkalorien += cal;
    Elfenkalorien.push(Gesamtkalorien);
  });
  const ElfenkalorienSortiert = Elfenkalorien.sort((a, b) => b - a);
  // Teil 1
  console.log(ElfenkalorienSortiert[0]);
  // Teil 2
  console.log(
    ElfenkalorienSortiert[0] +
      ElfenkalorienSortiert[1] +
      ElfenkalorienSortiert[2],
  );
}

function Tag_2() {
  const input = Deno.readTextFileSync("inputs/2");
  const Runden: string[] = input.split("\n");
  let GesamtBetrag = 0;
  let GewinnTabelle: { [key: string]: { [key: string]: number } };
  // Teil 1
  Runden.forEach((Runde) => {
    const MaterialBonus = Runde.charCodeAt(2) - "W".charCodeAt(0);
    const Zeichen = Runde.split(" ");
    GewinnTabelle = {
      A: { X: 3, Y: 6, Z: 0 },
      B: { X: 0, Y: 3, Z: 6 },
      C: { X: 6, Y: 0, Z: 3 },
    };
    GesamtBetrag += MaterialBonus + GewinnTabelle[Zeichen[0]][Zeichen[1]];
  });
  console.log(GesamtBetrag);
  // Teil 2
  GesamtBetrag = 0;
  Runden.forEach((Runde) => {
    const Zeichen = Runde.split(" ");
    const GewinnA = 1;
    const GewinnB = 2;
    const GewinnC = 3;
    GewinnTabelle = {
      A: { X: GewinnC, Y: GewinnA + 3, Z: GewinnB + 6 },
      B: { X: GewinnA, Y: GewinnB + 3, Z: GewinnC + 6 },
      C: { X: GewinnB, Y: GewinnC + 3, Z: GewinnA + 6 },
    };
    GesamtBetrag += GewinnTabelle[Zeichen[0]][Zeichen[1]];
  });
  console.log(GesamtBetrag);
}

function Tag_3() {
  // https://adventofcode.com/2022/day/3
}

Tag_3();
