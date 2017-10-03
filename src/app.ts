interface Window { app: any; }

window.app = window.app || {
    onLoad: function (): void {
        setTimeout(() => {
            document.getElementById('output').innerHTML = "LOADED!";
            console.log('loaded!');
        }, 1000);

    }
};

console.log('hello webpack + TS');