const jokes = () => {
    let jokes = Math.floor(Math.random() * 10)
    let message = ''
    switch (jokes) {
        case 0:
            message = 'What do kids play when their mom is using the phone? Bored games.'
            break;
            case 1:
            message = 'What do you call an ant who fights crime? A vigilANTe!'
            break;
            case 2:
            message = 'What’s the smartest insect? A spelling bee!'
            break;
            case 3:
            message = 'What does a storm cloud wear under his raincoat? Thunderwear.'
            break;
            case 4:
            message = 'What is fast, loud and crunchy? A rocket chip.'
            break;
            case 5:
            message = 'How does the ocean say hi? It waves!'
            break;
            case 6:
            message = 'Why did the teddy bear say no to dessert? Because she was stuffed.'
            break;
            case 7:
            message = 'Name the kind of tree you can hold in your hand? A palm tree!'
            break;
            case 8:
            message = 'What do birds give out on Halloween? Tweets.'
            break;
            case 9:
            message = 'What has ears but cannot hear? A cornfield.'
            break;
        default:
            message = 'oups'
            break;
            
    }
    return message
}
console.log(jokes())