import { trigger, transition, style, animate } from '@angular/animations';

export const scale = trigger('scale', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translate(-50%, -50%) scale(.2)'
        }),
        animate(500)
    ])
]);

export const fadeIn = trigger('fadeIn', [
    transition('* <=> *', [
        style({
            opacity: 0,
            transform: 'translateY(-50px)'
        }),
        animate(500)
    ])
]);