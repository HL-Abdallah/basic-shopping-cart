export default function formatPrice(price) {
    const GBPFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return GBPFormatter.format(price);
}