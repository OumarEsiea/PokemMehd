/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
var my_app;
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

    my_app = Vue.createApp({
        data() {
            return {
                message: 'Hello Vue!',
                pokemonList: [],
                offset: 0,
                limit: 10,
                selectedPokemon: null,
            };
        },
        mounted() {
            this.getPokemon();
        },
        methods: {
            getPokemon() {
                fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`)
                    .then(response => response.json())
                    .then(data => {
                        this.pokemonList = [];

                            data.results.forEach(pokemon => {
                                fetch(pokemon.url)
                                    .then(response => response.json())
                                    .then((pokemonData) => {
                                        const abilities = pokemonData.abilities.map(ability => ability.ability.name);
                                        const spriteUrl = pokemonData.sprites.front_default;
                                        const spriteArtworkUrl = pokemonData.sprites.other['official-artwork'].front_default;
                                        const stats = pokemonData.stats.map(stat => `${stat.stat.name} : ${stat.base_stat}`).join('\n');
                                        const pokemonDetails = {
                                            name: pokemon.name,
                                            abilities: abilities,
                                            sprite: spriteUrl,
                                            spriteArtwork: spriteArtworkUrl,
                                            stats: stats
                                        };
                                        this.pokemonList.push(pokemonDetails);
                                    });
                            });
                    });
            },
            getNextPokemon() {
                this.offset += this.limit;
                this.getPokemon();
            },
            getPreviousPokemon() {
                if (this.offset >= this.limit) {
                    this.offset -= this.limit;
                    this.getPokemon();
                }
            },
            selectPokemon(pokemon) {
                this.selectedPokemon = pokemon;
            },
            playSound(){
                let my_media;
                if (this.selectedPokemon) {
                    if (this.selectedPokemon.name === "bulbasaur") {
                        my_media = new Media('./audio/bulbasaurSound.ogg');
                        my_media.play();
                        this.vibrate();
                    }
                    else if(this.selectedPokemon.name === "pikachu") {
                        my_media = new Media('./audio/Pikachu_attack.mp3');
                        my_media.play();
                        this.vibrate();
                    }
                }
            },
            vibrate() {
                const element = document.getElementById('vibrating-element');
                let posX = 0;
                let posY = 0;

                function vibrate() {
                    posX = Math.floor(Math.random() * 5) - 2;
                    posY = Math.floor(Math.random() * 5) - 2;
                    element.style.transform = `translate(${posX}px, ${posY}px)`;
                }

                function stopVibration() {
                    clearInterval(interval);
                    element.style.transform = 'translate(0, 0)';
                }

                let interval = setInterval(vibrate, 50);
                setTimeout(stopVibration, 2000);
            }
        }
    })
    my_app.mount('#pokedex');
}
