// Controleer of model-viewer geladen is
function supportsModelViewer() {
    return customElements.get('model-viewer') !== undefined;
}

// User agent variabelen
const ua = navigator.userAgent.toLowerCase();

// Detecteer mobiel device
const isMobile = /iphone|ipad|ipod|android|mobile/.test(ua);

// Detecteer mobiele Safari (iOS browsers zijn ALLEMAAL WebKit)
const isMobileSafari = /iphone|ipad|ipod/.test(ua);

// Detecteer mobiele Firefox
const isMobileFirefox = isMobile && ua.includes("firefox");

// Als niet ondersteund, of mobiele Safari, of mobiele Firefox → toon melding
if (!supportsModelViewer() || isMobileSafari || isMobileFirefox) {
    document.getElementById("viewer").style.display = "none";
    document.getElementById("unsupported-message").style.display = "block";
}
