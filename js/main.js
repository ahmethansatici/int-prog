import { TextScramble } from './scramble.js';

document.addEventListener('DOMContentLoaded', () => {
    
    const heroTitle = document.querySelector('.scramble-text');
    if (heroTitle) {
        const fx = new TextScramble(heroTitle);
        const phrases = [
            'SOFTWARE ARCHITECT',
            'GOLANG & TS EXPERT',
            'SYSTEM DESIGNER',
            'CLOUD NATIVE DEV',
            'FULL STACK ENGINEER'
        ];
        
        let counter = 0;
        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 3000);
            });
            counter = (counter + 1) % phrases.length;
        };
        
        next();
    }

    console.log(
        '%c Portfolio by Ahmethan Satıcı ',
        'background: #00ff41; color: #000; font-weight: bold; padding: 4px;'
    );
});