const bs = {
  residents: {
    title: 'Lista stanovnika planete ',
    table: {
      rows: {
        name: 'Ime',
        height: 'Visina',
        weight: 'Težina',
        hairColor: 'Boja kose',
        species: 'Vrsta'
      },
      weight: {
        unknown: 'Nepoznato'
      },
      hairColor: {
        blond: 'plava',
        none: 'nije poznato',
        brown: 'smeđa',
        grey: 'siva',
        black: 'crna',
        white: 'bijela'
      }
    },
    species: {
      Human: 'Čovjek',
      Droid: 'Robot'
    }
  },
  species: {
    Human: 'Covjek'
  },
  navigation: {
    residents: 'Stanovnici',
    settings: 'Postavke'
  },
  settings: {
    language: {
      title: 'Jezik',
      text: 'Ovdje možete promijeniti svoje jezičke postavke.'
    },
    units: {
      title: 'Sistem mjernih jedinica',
      text: 'Odaberite sistem mjernih jedinica koji želite koristiti.',
      metric: 'Metrični',
      imperial: 'Imperijalni'
    },
    storage: {
      title: 'Lokalna memorija',
      text: 'Uradite ili ne. Nema pokušaja.',
      confirmation: {
        text: 'Da li ste potpuno sigurni da želite isprazniti lokalnu memoriju?',
        button: 'Isprazni lokalnu memoriju',
        yes: 'Da, izbriši!',
        cancel: 'Odustani'
      }
    }
  }
}

export default bs
