let character = {
    name: 'Scooby-Doo',
    nickname: 'Scoob',
    group: 'Mystery Inc',
    catchphrase: ['Scooby-Dooby-Doo!', 'Rooby-Rooby-Roo!'],
    isHungry: true,
    transportation: 'Mystery Machine',
    friend: [
        {
            g: 'his',
            name: 'Shaggy',
            nickname: 'Shag',
            trait: 'Appetite'
        },
        {
            g: 'her',
            name: 'Velma',
            nickname: 'Shag',
            trait: 'Keen intellect'
        },
        {
            g: 'her',
            name: 'Daphne',
            nickname: 'Shag',
            trait: 'Intuition'
        },
        {
            g: 'his',
            name: 'Fred',
            nickname: 'Fred',
            trait: 'Leadership'
        },

    ],
    monsters: [
        {
            monster: 'Black Knight',
            identity: 'Mr. Wickles',
            town: 'Coolsville',
            location: 'County Museum',
            type: 'ghost',
            reason: 'conceal his art forgery crimes',
            ocupation: 'museum curator'
        },
        {
            monster: 'Ghost of Captain Cutle',
            identity: 'Captain Cutler',
            town: 'Rocky Point Beach',
            location: 'Lighthouse',
            type: 'ghost',
            reason: 'steal boats',
            ocupation: 'sailor'
        },
        {
            monster: 'Phantom',
            identity: 'Bluestone the Great',
            town: 'Haunted Isle',
            location: 'Vasquez castle',
            type: 'ghost',
            reason: 'search for treasure',
            ocupation: 'stage magician'
        },
        {
            monster: 'Miner Forty-Niner',
            identity: 'Hank',
            town: 'Gold City',
            location: 'Gold City Mine',
            type: 'ghost',
            reason: 'get oil land cheap',
            ocupation: 'caretaker'
        },
        {
            monster: 'Witch Doctor',
            identity: 'Buck Masters',
            town: 'Indian village',
            location: 'Indian village',
            type: 'human',
            reason: 'get rid of all the dogs that might beat his own in the dog show',
            ocupation: 'owner of Big Red'
        },
        {
            monster: 'Ghost of Elias Kingston',
            identity: 'Stuart Wetherby',
            town: 'Coolsville',
            location: 'Wetherby Estate',
            type: 'ghost',
            reason: 'steal from his relatives',
            ocupation: 'paternal uncle of Sharon Wetherby'
        },
        {
            monster: 'Ape Man',
            identity: 'Carl',
            town: 'Forbidden Mountain',
            location: 'movie set',
            type: 'ape',
            reason: 'sabotage the film and set',
            ocupation: 'stuntman'
        }
    ]
}

const monsterNmbr = Math.floor(Math.random() * character.monsters.length)
const companionNmbr = Math.floor(Math.random() * character.friend.length)
let trapperNmbr = Math.floor(Math.random() * character.friend.length)
while (trapperNmbr === companionNmbr) {
    trapperNmbr = Math.floor(Math.random() * character.friend.length)
}

console.log(`${character.name} and the ${character.group} gang, ${friend()}, found themselves in ${character.monsters[monsterNmbr].town}. The locals were terrified by sightings of a ${character.monsters[monsterNmbr].type} haunting at the ${character.monsters[monsterNmbr].location}.`)
console.log(`Eager to solve the mystery, the gang drove their ${character.transportation} up the winding path to the ${character.monsters[monsterNmbr].location}. The gang split up to search for clues. ${character.name} went with ${character.friend[companionNmbr].name} looking for clues.`)
console.log(`As the gang explored, they encountered the ${character.monsters[monsterNmbr].monster}. ${character.friend[trapperNmbr].name}, with ${character.friend[trapperNmbr].g} ${character.friend[trapperNmbr].trait}, set a trap for the ${character.monsters[monsterNmbr].monster}, capturing the ${character.monsters[monsterNmbr].type}.`)
console.log(`Unmasking the ${character.monsters[monsterNmbr].type}, they revealed the true identity: ${character.monsters[monsterNmbr].identity}, a ${character.monsters[monsterNmbr].ocupation}, trying to ${character.monsters[monsterNmbr].reason}.`)
console.log(`With the mystery solved, the people could rest easy, and ${character.monsters[monsterNmbr].location} would no longer be haunted. The gang bid farewell to ${character.monsters[monsterNmbr].town}, confident that wherever there was a mystery, they would be there to solve it!`)
console.log(`${character.catchphrase[Math.floor(Math.random() * character.catchphrase.length)]}`)


function friend() {
    return character.friend.map(friend => friend.name).join(', ');
}
