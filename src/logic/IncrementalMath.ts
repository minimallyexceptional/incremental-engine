export function getPercentage (min, max, current) {
    return ((current - min) * 100) / (max - min)
}