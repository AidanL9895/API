$(document).ready(function() {
    const container = $('#pokemon-container');

    // Fetch 10 random Pokémon (IDs from 1 to 151 for Gen 1)
    for (let i = 1; i <= 10; i++) {
        let randomId = Math.floor(Math.random() * 151) + 1;

        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${randomId}`,
            method: 'GET',
            success: function(data) {
                let name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                let img = data.sprites.front_default;
                let types = data.types.map(typeInfo => typeInfo.type.name).join(', ');

                let card = $(`
                    <div class="pokemon-card">
                        <img src="${img}" alt="${name}">
                        <div class="pokemon-name">${name}</div>
                        <div class="pokemon-type">${types}</div>
                    </div>
                `);

                container.append(card);
            },
            error: function() {
                console.error('Failed to fetch Pokémon data');
            }
        });
    }
});
