let canClick = true;
let selectedPriceRange = null;

// Initialize the page
function initPage() {
    const result = document.getElementById('result');
    result.textContent = "Clique sur le cadeau pour découvrir ta surprise !";
    result.style.opacity = "1";
    document.getElementById('price-selector').style.display = 'flex';
}

// Run initialization when page loads
document.addEventListener('DOMContentLoaded', initPage);

function selectPriceRange(range) {
    selectedPriceRange = range;
    
    // Update button styles
    const buttons = document.querySelectorAll('.price-button');
    buttons.forEach(button => {
        button.classList.remove('selected');
        if (button.textContent.includes(range === 'small' ? 'Petit' : 
            range === 'medium' ? 'Moyen' : 
            range === 'big' ? 'Grand' : 
            'LinkedIn')) {
            button.classList.add('selected');
        }
    });

    // Enable gift clicking
    canClick = true;
    document.getElementById('gift').style.opacity = "1";
    document.getElementById('result').textContent = "Clique sur le cadeau pour découvrir ta surprise !";
}

function openGift() {
    if (!canClick) return;
    if (!selectedPriceRange) {
        document.getElementById('result').textContent = "Sélectionne d'abord un budget !";
        return;
    }
    
    canClick = false;
    const gift = document.getElementById('gift');
    const result = document.getElementById('result');
    const giftDetails = document.getElementById('gift-details');
    const resetButton = document.querySelector('.button');
    const priceSelector = document.getElementById('price-selector');
    
    gift.classList.add('shake');
    
    // Hide price selector
    priceSelector.style.display = 'none';
    
    setTimeout(() => {
        // Filter gifts by selected price range
        const filteredGifts = gifts.filter(gift => gift.priceRange === selectedPriceRange);
        const randomGift = filteredGifts[Math.floor(Math.random() * filteredGifts.length)];
        
        result.textContent = `🎉 ${randomGift.name}`;
        giftDetails.textContent = randomGift.description;
        giftDetails.classList.add('show');
        resetButton.style.display = 'inline-block';
        
        gift.classList.remove('shake');
    }, 500);
}

function resetGift() {
    const result = document.getElementById('result');
    const giftDetails = document.getElementById('gift-details');
    const resetButton = document.querySelector('.button');
    const priceSelector = document.getElementById('price-selector');
    
    // Remove selected state from all buttons
    document.querySelectorAll('.price-button').forEach(button => {
        button.classList.remove('selected');
    });
    
    giftDetails.classList.remove('show');
    resetButton.style.display = 'none';
    
    // Show price selector again
    priceSelector.style.display = 'flex';
    selectedPriceRange = null;
    
    setTimeout(() => {
        result.textContent = "Clique sur le cadeau pour découvrir ta surprise !";
        giftDetails.textContent = "";
        canClick = true;
    }, 500);
}
