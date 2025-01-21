const music = new Audio('audio/1.mp3');
// music.play();

// new Audio('audio/1.mp3'): This part creates a new instance of the Audio object. The Audio object in JavaScript is used to play and control audio on a webpage.

// 'audio/1.mp3': This is the URL or path to the audio file that you want to load into the Audio object. In this case, it's '1.mp3' located in the 'audio' folder.

// const music: This declares a constant variable named music to store the instance of the Audio object. The const keyword ensures that the variable cannot be reassigned to a new value.

const songs = [{
        id: '1',
        songName: ` Arijit Singh Mashup <br><div class="subtitle"> Arijit Singh , Pritam</div>`,
        poster: "img/arjit/1.jpg"
    },
    {
        id: '2',
        songName: ` Heeriye <br><div class="subtitle">Jasleen Royal</div>`,
        poster: "img/arjit/2.jpg"
    },
    {
        id: "3",
        songName: `Tu hai to mujhe <br><div class="subtitle"> Zara Hatke Zara Bachke</div>`,
        poster: "img/arjit/3.jpg",
    },
    {
        id: "4",
        songName: `Tere Hawaale <br><div class="subtitle"> Laal Singh Chadda</div>`,
        poster: "img/arjit/4.jpg",
    },
    {
        id: "5",
        songName: `Chaleya <br><div class="subtitle">Jawan</div>`,
        poster: "img/arjit/5.jpg",
    },
    {
        id: "6",
        songName: `Kesariya <br><div class="subtitle"> Bhramastra</div>`,
        poster: "img/arjit/6.jpg",
    },
    {
        id: "7",
        songName: `Maan Jogiya <br><div class="subtitle">Arjit Singh , Ishita</div>`,
        poster: "img/arjit/7.jpg",
    },
    {
        id: "8",
        songName: `Khufiya <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/8.jpg",
    },
    {
        id: "9",
        songName: `Hawayein <br><div class="subtitle">Jab Harry Met Sejal</div>`,
        poster: "img/arjit/9.jpg",
    },
    {
        id: "10",
        songName: `Aabaad Barbaad <br><div class="subtitle">LUDO</div>`,
        poster: "img/arjit/10.jpg",
    },
    {
        id: "11",
        songName: `Aashiqui Aa Gayi <br><div class="subtitle">Radhe Shyam</div>`,
        poster: "img/arjit/11.jpg",
    },
    {
        id: "12",
        songName: `Alizeh<br><div class="subtitle">Ae Dil Hai Mushkil</div>`,
        poster: "img/arjit/12.jpg",
    },
    {
        id: "13",
        songName: `Aaj Phir  <br><div class="subtitle">Hate Story 2</div>`,
        poster: "img/arjit/13.jpg",
    },
    {
        id: "14",
        songName: `Alvida<br><div class="subtitle"> Rangoon </div>`,
        poster: "img/arjit/14.jpg",
    },
    {
        id: "15",
        songName: `Aayat <br><div class="subtitle">Bajirao Mastani</div>`,
        poster: "img/arjit/15.jpg",
    },
    {
        id: "16",
        songName: `Beegi Beegi <br><div class="subtitle">Jab Harry Met Sejal</div>`,
        poster: "img/arjit/16.jpg",
    },
    {
        id: "17",
        songName: `Bhool Jaa  <br><div class="subtitle"> Arjit Singh </div>`,
        poster: "img/arjit/17.jpg",
    },
    {
        id: "18",
        songName: ` Blame the Night  <br><div class="subtitle">Holiday</div>`,
        poster: "img/arjit/18.jpg",
    },
    {
        id: "19",
        songName: ` Aashiqui 2 <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/19.jpg",
    },
    {
        id: "20",
        songName: `Chalte Chalte <br><div class="subtitle">Tutak Tutak Tutiya</div>`,
        poster: "img/arjit/20.jpg",
    },
    {
        id: "21",
        songName: `Channa Mereya <br><div class="subtitle">Arjit Singh, Pritam</div>`,
        poster: "img/arjit/21.jpg",
    },
    {
        id: "22",
        songName: `Chedkaaniyaan <br><div class="subtitle">Shehzada</div>`,
        poster: "img/arjit/22.jpg",
    },
    {
        id: "23",
        songName: `Chappak <br><div class="subtitle">Arjit, Jonita Gandhi</div>`,
        poster: "img/arjit/23.jpg",
    },
    {
        id: "24",
        songName: `PChoice and Decisions <br><div class="subtitle">Paglait</div>`,
        poster: "img/arjit/24.jpg",
    },
    {
        id: "25",
        songName: `Chori Chori<br><div class="subtitle">Hunterrr</div>`,
        poster: "img/arjit/25.jpg",
    },
    {
        id: "26",
        songName: `Daayre<br><div class="subtitle">Dilwale</div>`,
        poster: "img/arjit/26.jpg",
    },
    {
        id: "27",
        songName: `Dance ka Bhoot <br><div class="subtitle">Bhramastra</div>`,
        poster: "img/arjit/27.jpg",
    },
    {
        id: "28",
        songName: `Dekha Hazaaron Daffa Aapko <br><div class="subtitle">Rustom</div>`,
        poster: "img/arjit/28.jpg",
    },
    {
        id: "29",
        songName: ` Deva Deva <br><div class="subtitle"> Bhramastra </div>`,
        poster: "img/arjit/29.jpg",
    },
    {
        id: "30",
        songName: `Dhokha Dadhi <br><div class="subtitle"> R. Rajkumar </div>`,
        poster: "img/arjit/30.jpg",
    },
    {
        id: "31",
        songName: `Dil cheez tujhe dedi <br><div class="subtitle">Airlift</div>`,
        poster: "img/arjit/31.jpg",
    },
    {
        id: "32",
        songName: `Dil ke Paas<br><div class="subtitle">Wajah Tum Ho</div>`,
        poster: "img/arjit/32.jpg",
    },
    {
        id: "33",
        songName: ` Dil ko Maine Di Kasam <br><div class="subtitle">Arjit, Kumaar</div>`,
        poster: "img/arjit/33.jpg",
    },
    {
        id: "34",
        songName: `Hoja Mast Malang Tu <br><div class="subtitle"> Malang </div>`,
        poster: "img/arjit/34.jpg",
    },
    {
        id: "35",
        songName: ` Binte Dil <br><div class="subtitle">Padmaavat</div>`,
        poster: "img/arjit/35.jpg",
    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

// document.getElementsByClassName('songItem'): This part selects all elements with the class 'songItem' on the page. It returns a live HTMLCollection of elements.

// Array.from(...): Converts the HTMLCollection into an array. This makes it easier to use array methods like forEach.

// .forEach((e, i) => { ... }): Iterates over each element in the array. The arrow function (e, i) => { ... } takes two parameters: e is the current element, and i is its index in the array.

// e.getElementsByTagName('img')[0].src = songs[i].poster;: For each 'songItem', it finds the first 'img' element inside it using getElementsByTagName('img'), then sets its 'src' attribute to the 'poster' property of the corresponding item in the 'songs' array.

// e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;: Similarly, it finds the first 'h5' element inside each 'songItem' and sets its innerHTML to the 'songName' property of the corresponding item in the 'songs' array.



// MASTER PLAY


// PLAY  BUTTON

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});


//Set the Play/pause Button of each song

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}


// Set Background of each song
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

// The makeAllBackground function you've defined uses JavaScript to set the background color of all elements with the class 'songItem' to 'rgb(105, 105, 105, 0)'.





// music.paused: Checks if the audio is currently paused. If true, it means the audio is not playing.

// music.currentTime <= 0: Checks if the current playback time of the audio is less than or equal to 0. This condition can be used to determine if the audio is at the beginning.


// Play Music according to the ID
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click' , (el) =>{
        index = el.target.id;
        music.src = `audio/arjit/${index}.mp3`;
        poster_master_play.src = `img/arjit/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        //To give the path for DOWNLOAD
        download_music.href = `audio/arjit/${index}.mp3`;

        let songTitles = songs.filter((els) => {
            return els.id == index ;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
            // poster_master_play.src = poster;
            download_music.setAttribute('download' , songName);

        //elss is an object.
        // { songName, poster } is the destructuring pattern. It means "extract the values of the properties songName and poster from the object."
        // The extracted values are assigned to variables with the same names, songName and poster.
        // After this code block, you can use the variables songName and poster to reference the corresponding values from the object elss. For example, title.innerHTML = songName; sets the inner HTML of an element with the class title to the value of songName, and poster_master_play.src = poster; sets the source of an element with the ID poster_master_play to the value of poster.
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";

        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

        //el.target: Represents the target element on which the event occurred. This is often used inside event handlers.

        // classList.add('bi-pause-fill'): Adds the CSS class 'bi-pause-fill' to the class list of the target element.

        // classList.remove('bi-play-fill'): Removes the CSS class 'bi-play-fill' from the class list of the target element.
    });    
})












// Set the timing of the music being played
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate' , () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    // The music.currentTime property in JavaScript is used to get or set the current playback position (in seconds) of an audio or video element.

    // The music.duration property in JavaScript is used to get the total duration (in seconds) of an audio or video element. It represents the length of the media file being played.



    //Update the END Time
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;


    //Update the START Time
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;



    //Update the MUSIC BAR
    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});
 

//Update the DOT in the bar
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

// music.currentTime = seek.value * music.duration / 100; 
// This line sets the currentTime property of the music audio element to a new value calculated based on the value of the seek input. The seek.value represents the current value of the input (presumably a percentage), and it is multiplied by music.duration / 100 to convert it to the corresponding time in the audio file.





//update the VOLUME Bar 
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});



//Update the Next and Previous Buttons
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/arjit/${index}.mp3`;
    poster_master_play.src = `img/arjit/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})


next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/arjit/${index}.mp3`;
    poster_master_play.src = `img/arjit/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});






// Left and Right Keys

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click' , () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click' , () => {
    pop_song.scrollLeft -= 330;
});

// pop_song_right.addEventListener('click', () => {...});: This line adds an event listener to the element with the ID pop_song_right. The event being listened for is the 'click' event, and the function provided (in the arrow function) will be executed when the element is clicked.

// pop_song.scrollLeft += 330;: This line increases the scrollLeft property of the element with the ID pop_song by 330 pixels. This likely means that when the element with the ID pop_song_right is clicked, it will scroll the content of the element with the ID pop_song to the right by 330 pixels.


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click' , () => {
    Artists_bx.scrollLeft += 330;
});

pop_song_left.addEventListener('click' , () => {
    Artists_bx.scrollLeft -= 330;
});





//SHUFFLE PLAYLIST

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat": 
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random": 
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});



const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href =  `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}
const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href =  `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href =  `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}



music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
})




