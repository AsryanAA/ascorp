export function formatDate(input) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    const date = new Date(input)

    return date.toLocaleDateString('ru-Ru', options);
}