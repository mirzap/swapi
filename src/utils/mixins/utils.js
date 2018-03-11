import _ from 'lodash'

const utils = {
  methods: {
    getValidColors () {
      return {
        blond: '#d8b041',
        brown: 'brown',
        black: 'black',
        grey: 'grey'
      }
    },
    colorbox (color) {
      let colors = this.getHairColorLocale(color)
      let result = ''

      colors.forEach(element => {
        if (element.color === 'none') result = element.trans
        else result += `<span class="colorbox" style="background: ${element.color};"></span> ${element.trans}`
      })

      return result
    },
    getHairColorLocale (color) {
      const validColors = this.getValidColors()
      let colors = this.$options.filters.split(color, ',')
      let self = this

      // Normalize the data, add locale for each color
      colors = _.map(colors, function (color) {
        if (!(color in validColors)) {
          return {
            'color': 'none',
            'trans': self.$locale({i: `residents.table.hairColor.none`})
          }
        }

        return {
          'color': validColors[color],
          'trans': self.$locale({i: `residents.table.hairColor.${color}`})
        }
      })

      return colors
    },
    toMeters (value) {
      const meters = value / 100

      return `${meters} m`
    },
    toFeet (value) {
      const realFeet = ((value * 0.393700) / 12)
      const feet = Math.floor(realFeet)
      const inches = Math.round((realFeet - feet) * 12)

      return `${feet}' ${inches}"`
    },
    toKilograms (value) {
      return `${value} kg`
    },
    toPounds (value) {
      // 1kg is equal to 2.2046226218 lbs
      const lbs = 2.2046226218
      let conversion = Math.round((value * lbs) * 100) / 100

      return `${conversion} lbs`
    }
  }
}

export default utils
