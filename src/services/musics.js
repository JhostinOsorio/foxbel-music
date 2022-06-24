const listMusic = [
  {
    id: 1,
    name: 'Adele',
    titleTrack: 'Rolling in the Deep',
    followers: '123, 254',
    description: 'Adele Laurie Blue Adkins, conocida simplemente como Adele, es una cantautora y multinstrumentista británica.​ Es una de las artistas musicales con mayores ventas del mundo, con más de 120 millones de ventas entre discos y sencillos.',
    img: './apiFake/rolling_in_the_deep/logo.jpg',
    imgLandscape: './apiFake/rolling_in_the_deep/landscape.jpg',
    track: './apiFake/rolling_in_the_deep/audio.mp3',
  },
  {
    id: 2,
    name: 'Michael Jackson',
    titleTrack: 'Billi Jean',
    followers: '123, 254',
    description: 'Michael Joseph Jackson (29 de agosto de 1958, Gary, Indiana - 25 de junio de 2009, Los Ángeles, California), conocido simplemente como Michael Jackson, fue un cantante, compositor y bailarín estadounidense de música hard rock, rhythm & blues (soul y funk), disco y dance',
    img: './apiFake/billie_jean/logo.jpg',
    imgLandscape: './apiFake/billie_jean/landscape.jpg',
    track: './apiFake/billie_jean/audio.mp3',
  },
  {
    id: 3,
    name: 'Coldplay',
    titleTrack: 'Viva la Vida',
    followers: '123, 254',
    description: 'Coldplay es una banda británica de pop rock y rock alternativo formada en Londres en 1996.​​ Está integrada por Chris Martin, Jon Buckland, Guy Berryman y Will Champion. Es uno de los grupos más relevantes de la década de los 2000, los 2010, y en la actualidad.',
    img: './apiFake/viva_la_vida/logo.jpg',
    imgLandscape: './apiFake/viva_la_vida/landscape.jpg',
    track: './apiFake/viva_la_vida/audio.mp3',
  },
  {
    id: 4,
    name: 'Coldplay',
    titleTrack: 'Adventure of a Lifetime',
    followers: '123, 254',
    description: 'Coldplay es una banda británica de pop rock y rock alternativo formada en Londres en 1996.​​ Está integrada por Chris Martin, Jon Buckland, Guy Berryman y Will Champion. Es uno de los grupos más relevantes de la década de los 2000, los 2010, y en la actualidad.',
    img: './apiFake/adventure_of_a_lifetime/logo.jpg',
    imgLandscape: './apiFake/adventure_of_a_lifetime/landscape.jpg',
    track: './apiFake/adventure_of_a_lifetime/audio.mp3',
  },
  {
    id: 5,
    name: 'John Newman',
    titleTrack: 'Love Me Again',
    followers: '123, 254',
    description: 'John William Peter Newman, más conocido como John Newman, es un músico, cantante, productor y compositor británico, que en 2012 saltó a la fama cuando apareció en el tema «Feel the Love», de Rudimental, que entró en la posición 1 del ranquin de sencillos de Reino Unido.​',
    img: './apiFake/love_me_again/logo.jpg',
    imgLandscape: './apiFake/love_me_again/landscape.jpg',
    track: './apiFake/love_me_again/audio.mp3',
  },
  {
    id: 6,
    name: 'The Weeknd',
    titleTrack: 'Blinding Lights',
    followers: '123, 254',
    description: 'Abel Makkonen Tesfaye, conocido por su nombre artístico The Weeknd, es un cantante, compositor y productor canadiense, conocido por éxitos como "Save Your Tears", "Blinding Lights", "Starboy", "The Hills", entre otros.​',
    img: './apiFake/blinding_lights/logo.jpg',
    imgLandscape: './apiFake/blinding_lights/landscape.jpg',
    track: './apiFake/blinding_lights/audio.mp3',
  },
  {
    id: 7,
    name: 'Opus',
    titleTrack: 'Live is Life',
    followers: '123, 254',
    description: 'Opus es un grupo de pop-rock austriaco, formado en Graz en 1973, y que continúan activos hasta hoy. Son mayormente conocidos por su famoso sencillo «Live is Life», que alcanzó las primeras posiciones en varios países europeos.​',
    img: './apiFake/live_is_life/logo.jpg',
    imgLandscape: './apiFake/live_is_life/landscape.jpg',
    track: './apiFake/live_is_life/audio.mp3',
  },
  {
    id: 8,
    name: 'Guns N Roses',
    titleTrack: `Sweet Child O' Mine`,
    followers: '123, 254',
    description: 'Guns N Roses es una banda estadounidense de hard rock formada en Hollywood en la zona de Sunset Strip, alrededor de Santa Mónica, en el área metropolitana de Los Ángeles, California en 1985. El grupo fue fundado por el vocalista Axl Rose y el guitarrista Izzy Stradlin​',
    img: './apiFake/sweet_child_o_mine/logo.jpg',
    imgLandscape: './apiFake/sweet_child_o_mine/landscape.jpg',
    track: './apiFake/sweet_child_o_mine/audio.mp3',
  },
  {
    id: 9,
    name: 'Bon Jovi',
    titleTrack: `Livin' On A Prayer`,
    followers: '123, 254',
    description: 'Bon Jovi es una banda estadounidense de rock formada en 1983 en Nueva Jersey por su líder y vocalista Jon Bon Jovi. La formación actual la completan el teclista David Bryan, el batería Tico Torres, el bajista Hugh McDonald y el guitarrista Phil X.',
    img: './apiFake/livin_on_a_prayer/logo.jpg',
    imgLandscape: './apiFake/livin_on_a_prayer/landscape.jpg',
    track: './apiFake/livin_on_a_prayer/audio.mp3',
  },
  {
    id: 10,
    name: 'The Police',
    titleTrack: `Every Breath You Take`,
    followers: '123, 254',
    description: 'The Police fue un trío británico de rock, activo desde finales de la década de los 70 hasta mediados de la década de los 80, bajo el formato de power trio.​ Perteneciente a la new wave británica, su estilo musical estuvo marcado por influencias del rock, pop, reggae, funk y jazz.',
    img: './apiFake/every_breath_you_take/logo.jpg',
    imgLandscape: './apiFake/every_breath_you_take/landscape.jpg',
    track: './apiFake/every_breath_you_take/audio.mp3',
  },
  {
    id: 11,
    name: 'R.E.M.',
    titleTrack: `Losing My Religion`,
    followers: '123, 254',
    description: `R.E.M. fue una banda de rock estadounidense formada en Athens, Georgia, en 1980 por el baterista Bill Berry, el guitarrista Peter Buck, el bajista Mike Mills y el vocalista principal Michael Stipe, quienes eran estudiantes de la Universidad de Georgia.`,
    img: './apiFake/losing_my_religion/logo.jpg',
    imgLandscape: './apiFake/losing_my_religion/landscape.jpg',
    track: './apiFake/losing_my_religion/audio.mp3',
  },
]

export const getAllMusics = () => {
  return [ ...listMusic ]
}
