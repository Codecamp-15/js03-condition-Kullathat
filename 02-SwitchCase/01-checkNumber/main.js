let Message = prompt('');

switch (+Message) {
    case 1:
        alert( 'One' );
        break;
    case 0:
        alert( 'Zero' );
        break;
    case -1:
        alert( 'Minus Zero' );
        break;
    default:
        alert( 'Invalid number' );
}