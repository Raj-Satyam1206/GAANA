<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="media.css">
    <title>Music Website</title>
    <style>
        header .song_side::before {
            background: url('arjit_bg.png');
        }

        body {
            background-image: url(img/artist_bg.jpg); 
        }   
        
        header .song_side .abt {
            width: 90%;
            height: 30%;
            /* border: 1px solid #fff; */
            margin: auto;
            padding-top: 20px;
        }

        
        header .song_side .abt h4 {
            font-size: 20px;
            font-weight: 300;
            color: cyan;
        }

        header .song_side .abt p {
            font-size: 15px;
            font-weight: 300;
            color: #4c5262;
            margin: 5px;
        }
    </style>
</head>

<body>
    <header>
        <div class="menu_side">
            <h6 id="menu_list_active_button"><i class="bi bi-music-note-list"></i></h6>
            <h1>Playlist</h1>
            <div class="playlist">
                <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i> Playlist</h4>
                <h4><span></span><i class="bi bi-music-note-beamed"></i> Last Listening</h4>
                <h4><span></span><i class="bi bi-music-note-beamed"></i> Recommended</h4>
            </div>
            <div class="menu_song">
                <li class="songItem">
                    <span>01</span>
                    <img src="img/1.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="1"></i>
                </li>
                <li class="songItem">
                    <span>02</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="2"></i>
                </li>
                <li class="songItem">
                    <span>03</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="3"></i>
                </li>
                <li class="songItem">
                    <span>04</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="4"></i>
                </li>
                <li class="songItem">
                    <span>05</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="5"></i>
                </li>
                <li class="songItem">
                    <span>06</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="6"></i>
                </li>
                <li class="songItem">
                    <span>07</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="7"></i>
                </li>
                <li class="songItem">
                    <span>08</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="8"></i>  
                </li>
                <li class="songItem">
                    <span>09</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="9"></i>  
                </li>
                <li class="songItem">
                    <span>10</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="10"></i>  
                </li>
                <li class="songItem">
                    <span>11</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="11"></i>  
                </li>
                <li class="songItem">
                    <span>12</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="12"></i>  
                </li>
                <li class="songItem">
                    <span>13</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="13"></i>  
                </li>
                <li class="songItem">
                    <span>14</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="14"></i>  
                </li>
                <li class="songItem">
                    <span>15</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="15"></i>  
                </li>
                <li class="songItem">
                    <span>16</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="16"></i>  
                </li>
                <li class="songItem">
                    <span>17</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="17"></i>  
                </li>
                <li class="songItem">
                    <span>18</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="18"></i>  
                </li>
                <li class="songItem">
                    <span>19</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="19"></i>  
                </li>
                <li class="songItem">
                    <span>20</span>
                    <img src="img/2.jpg" alt="">
                    <h5>On My Way<br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="20"></i>  
                </li>
            </div>
        </div>

        <div class="song_side">
            <nav>
                <ul>
                    <li>Discover <span></span></li>
                    <li>MY LIBRARY</li>
                    <li>RADIO</li>
                </ul>
                <div class="search">
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder="Search Music...">
                    <div class="search_results">
                        <!-- <a href="" class="card">
                            <img src="img/1.jpg" alt="">
                            <div class="content">
                                On My Way
                                <div class="subtitle">Alan Walker</div>
                            </div>
                        </a> -->
                        
                    </div>
                </div>
                <div class="user">
                    <img src="profile_picture.svg" alt="">
                </div>
            </nav>
            <div class="content">
                <h1>Arjit Singh</h1>
                <p>Iss jagah aa gayi chahatein ab meri <br> Cheen loonga tumhe saare duniya se hi <br> Tere ishq pe haan haq mera hi to hai <br> Keh diya hai ye maine mere Rabb se bhi</p>
                <div class="buttons">
                    <button>PLAY</button>
                    <button>FOLLOW</button>
                </div>
            </div>

            <div class="popular_song">
                <div class="h4">
                    <h4>Popular Song</h4>
                    <div class="btn_s">
                        <i class="bi bi-arrow-left-short" id="pop_song_left"></i>
                        <i class="bi bi-arrow-right-short" id="pop_song_right"></i>
                    </div>
                </div>
                <div class="pop_song">
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="21"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="22"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="23"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="24"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="25"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="26"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="27"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="28"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="29"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="30"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="31"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="32"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="33"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/2.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="34"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="img/20.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="35"></i>
                        </div>
                        <h5>On My Way<br>
                            <div class="subtitle">Alan Walker</div>
                        </h5>
                    </li>
                    
                </div>
            </div>

            <!-- <div class="popular_artists">
                <div class="h4">
                    <h4>Popular Artists</h4>
                    <div class="btn_s">
                        <i class="bi bi-arrow-left-short" id="pop_art_left"></i>
                        <i class="bi bi-arrow-right-short" id="pop_art_right"></i>
                    </div>
                </div>
                <div class="item Artists_bx">
                    <li>
                        <a href="arjit.html"><img src="img/arjit.jpg" alt=""></a>
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                    <li>
                        <img src="img/arjit.jpg" alt="">
                    </li>
                </div>
            </div> -->

            <div class="abt">
                <h4>Arjit Singh</h4>
                <p>Arjit Singh (born 25 April 1987) is an Indian playback singer and music composer.[6][4][2] The recipient of several accolades including a National Film Award and seven Filmfare Awards, he has recorded songs in several Indian languages, predominantly Hindi and Bengali.

                Singh began his career when he participated in the contemporary reality show Fame Gurukul in 2005. Singh made his Hindi cinema debut in 2013 with the song "Phir Mohabbat" along with Saim Bhatt and Mohammad Irfan Khan composed by Mithoon for the film Murder 2 although the song was recorded in 2009. The same year he had popular songs like "Raabta" from Agent Vinod, "Uska Hi Banana" from 1920: Evil Returns and "Duaa" from Shanghai.

                He received widespread recognition with the release of successful tracks "Tum Hi Ho" and "Chahun Main Ya Naa" from Aashique 2 in 2013.[7][8][9][10] He was declared the most-streamed Indian artist of 2020, 2021 and 2022 by Spotify. He is the 3rd most followed artist globally and the most followed Asian on Spotify</p>

            </div>
        </div>


        <div class="master_play">
            <div class="wave" id="wave">
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
            </div>
            <img src="img/arjit/21.jpg" alt="" id="poster_master_play">
            <h5 id="title">
                Channa Mereya
                <div class="subtitle">Arjit Singh, Pritam</div>
            </h5>
            <div class="icon">
                <i class="bi shuffle bi-music-note-beamed">next</i>
                <i class="bi bi-skip-start-fill" id="back"></i>
                <i class="bi bi-play-fill" id="masterPlay"></i>
                <i class="bi bi-s kip-end-fill" id="next" accesskey="n"></i>
                <a href="" download id="download_music"><i class="bi bi-cloud-arrow-down-fill" ></i></a>
            </div>
            <span id="currentStart">0:00</span>
            <div class="bar">
                <input type="range" id="seek" min="0" max="100">
                <div class="bar2" id="bar2"></div>
                <div class="dot"></div>
            </div>
            <span id="currentEnd">0:30</span>
            <div class="vol">
                <i class="bi bi-volume-up-fill" id="vol_icon"></i>
                <input type="range" min="0" max="100" id="vol">
                <div class="vol_bar"></div>
                <div class="dot" id="vol_dot"></div>
            </div>
        </div>

    </header>
    <script src="artist1.js"></script>
</body>

</html>