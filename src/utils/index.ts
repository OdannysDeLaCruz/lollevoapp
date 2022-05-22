import currency from 'currency.js'

/**
 * formatPrice format a number in currency format
 * @param price number to format
 * @returns numeric chain. Example, $1.000
 */
const formatPrice = (price: number): string => {
    return currency(price, { precision: 0, separator: '.'}).format()
}

export default {
    formatPrice
}