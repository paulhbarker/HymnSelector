function generate() {
  var weeks = document.querySelector("#weeks").value,
      hymnsArray = mergeHymnArrays(getHymnsWeeks(weeks), getSacramentWeeks(weeks)),
      output = "<tr><th>Opening</th><th>Sacrament</th><th>Intermediate</th><th>Closing</th></tr>";
  for (var i = 0; i < hymnsArray.length; i+=4) {
    output += "<tr>";
    output += "<td>"+hymnsArray[i]+"</td>";
    output += "<td>"+hymnsArray[i+1]+"</td>";
    output += "<td>"+hymnsArray[i+2]+"</td>";
    output += "<td>"+hymnsArray[i+3]+"</td>";
    output += "</tr>";
  }
  var table = document.querySelector("#output");
  table.innerHTML = output;
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      if (i != 0) {
        if (j != 1){
          table.rows[i].cells[j].onclick = function () {
            replaceHymn(this);
          };
        } else {
          table.rows[i].cells[j].onclick = function () {
            replaceSacramentHymn(this);
          };
        }
      }
    }
  }
  var exportButton = document.querySelector('#export');
  exportButton.style.display = 'inline';
}

function replaceHymn(cell){
  var hymn = getRandomHymn();
  cell.innerHTML = hymn;
}

function replaceSacramentHymn(cell){
  var hymn = getRandomSacrament();
  cell.innerHTML = hymn;
}

function getSacramentWeeks(weeks) {
  var shymns = [];
  var rounds = Math.ceil(weeks/29);
  for (var i = rounds; i > 0; i--) {
    temp = [];
    for (var j = 169; j <= 197; j++) {
      temp.push(j + " " + hymns[j]);
    }
    shuffle(temp);
    shymns = shymns.concat(temp);
  }
  return shymns.slice(0, weeks);
}

function getHymnsWeeks(weeks){
  var rhymns = [];
  var rounds = Math.ceil(weeks/87);
  for (var i = rounds; i > 0; i--) {
    temp = [];
    for (var j = 1; j <= 308; j++) {
      if (j < 169 || j > 215) {
        temp.push(j + " " + hymns[j]);
      }
    }
    shuffle(temp);
    rhymns = rhymns.concat(temp);
  }
  return out = rhymns.slice(0, weeks*3);
}

function shuffle(array) {
  var i = array.length,
      j = 0,
      temp;
  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function getRandomSacrament() {
  var rand = getRandom(169,198);
  return rand + " " + hymns[rand];
}

function getRandomHymn() {
  rand = 0;
  while(rand == 0 || (rand >= 169 && rand <=215)){
    rand = Math.floor(Math.random() * (308 - 1 + 1)) + 1;
  }
  return rand + " " + hymns[rand];
}

function getRandom(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function mergeHymnArrays(r,s){
  var temp = [];
  var j = 0;
  for (var i = 0; i < r.length; i+=3) {
    temp.push(r[i], s[j], r[i+1], r[i+2]);
    j++;
  }
  return temp;
}

var hymns = [
  null, //Get rid of dat nasty offset
  "The Morning Breaks",
  "The Spirit of God",
  "Now Let Us Rejoice",
  "Truth Eternal",
  "High on the Mountain Top",
  "Redeemer of Israel",
  "Israel, Israel, God Is Calling",
  "Awake and Arise",
  "Come, Rejoice",
  "Come, Sing to the Lord",
  "What Was Witnessed in the Heavens?",
  "'Twas Witnessed in the Morning Sky",
  "An Angel from on High",
  "Sweet Is the Peace the Gospel Brings",
  "I Saw a Mighty Angel Fly",
  "What Glorious Scenes Mine Eyes Behold",
  "Awake, Ye Saints of God, Awake!",
  "The Voice of God Again Is Heard",
  "We Thank Thee, O God, for a Prophet",
  "God of Power, God of Right",
  "Come, Listen to a Prophet's Voice",
  "We Listen to a Prophet's Voice",
  "We Ever Pray for Thee",
  "God Bless Our Prophet Dear",
  "Now We'll Sing with One Accord",
  "Joseph Smith's First Prayer",
  "Praise to the Man",
  "Saints, Behold How Great Jehovah",
  "A Poor Wayfaring Man of Grief",
  "Come, Come, Ye Saints",
  "O God, Our Help in Ages Past",
  "The Happy Day at Last Has Come",
  "Our Mountain Home So Dear",
  "O Ye Mountains High",
  "For the Strength of the Hills",
  "They, the Builders of the Nation",
  "The Wintry Day, Descending to Its Close",
  "Come, All Ye Saints of Zion",
  "O Saints of Zion",
  "Arise, O Glorious Zion",
  "Let Zion in Her Beauty Rise",
  "Hail to the Brightness of Zion's Glad Morning!",
  "Zion Stands with Hills Surrounded",
  "Beautiful Zion, Built Above",
  "Lead Me into Life Eternal",
  "Glorious Things of Thee Are Spoken",
  "We Will Sing of Zion",
  "Glorious Things Are Sung of Zion",
  "Adam-ondi-Ahman",
  "Come, Thou Glorious Day of Promise",
  "Sons of Michael, He Approaches",
  "The Day Dawn Is Breaking",
  "Let Earth's Inhabitants Rejoice",
  "Behold, the Mountain of the Lord",
  "Lo, the Mighty God Appearing!",
  "Softly Beams the Sacred Dawning",
  "We're Not Ashamed to Own Our Lord",
  "Come, Ye Children of the Lord",
  "Come, O Thou King of Kings",
  "Battle Hymn of the Republic",
  "Raise Your Voices to the Lord",
  "All Creatures of Our God and King",
  "Great King of Heaven",
  "On This Day of Joy and Gladness",
  "Come, All Ye Saints Who Dwell on Earth",
  "Rejoice, the Lord Is King!",
  "Glory to God on High",
  "A Mighty Fortress Is Our God",
  "All Glory, Laud, and Honor",
  "Sing Praise to Him",
  "With Songs of Praise",
  "Praise to the Lord, the Almighty",
  "Praise the Lord with Heart and Voice",
  "Praise Ye the Lord",
  "In Hymns of Praise",
  "God of Our Fathers, We Come unto Thee",
  "Great Is the Lord",
  "God of Our Fathers, Whose Almighty Hand",
  "With All the Power of Heart and Tongue",
  "God of Our Fathers, Known of Old",
  "Press Forward, Saints",
  "For All the Saints",
  "Guide Us, O Thou Great Jehovah",
  "Faith of Our Fathers",
  "How Firm a Foundation",
  "How Great Thou Art",
  "God Is Love",
  "Great God, Attend While Zion Sings",
  "The Lord Is My Light",
  "From All That Dwell below the Skies",
  "Father, Thy Children to Thee Now Raise",
  "For the Beauty of the Earth",
  "Prayer of Thanksgiving",
  "Come, Ye Thankful People",
  "Now Thank We All Our God",
  "Dearest Children, God Is Near You",
  "Lead, Kindly Light",
  "I Need Thee Every Hour",
  "Nearer, Dear Savior, to Thee",
  "Nearer, My God, to Thee",
  "Guide Me to Thee",
  "Jesus, Lover of My Soul",
  "Precious Savior, Dear Redeemer",
  "Jesus, Savior, Pilot Me",
  "Master, the Tempest Is Raging",
  "God Speed the Right",
  "Lord, Accept Our True Devotion",
  "The Lord Is My Shepherd",
  "The Lord My Pasture Will Prepare",
  "Cast Thy Burden upon the Lord",
  "Rock of Ages",
  "Savior, Redeemer of My Soul",
  "Our Savior's Love",
  "Come unto Him",
  "Come, Ye Disconsolate",
  "Come, Follow Me",
  "Come unto Jesus",
  "Ye Simple Souls Who Stray",
  "Come, We That Love the Lord",
  "Lean on My Ample Arm",
  "I'm a Pilgrim, I'm a Stranger",
  "Though Deepening Trials",
  "Oh, May My Soul Commune with Thee",
  "Be Still, My Soul",
  "How Gentle God's Commands",
  "How Long, O Lord Most Holy and True",
  "Does the Journey Seem Long?",
  "When Faith Endures",
  "Where Can I Turn for Peace?",
  "Be Thou Humble",
  "More Holiness Give Me",
  "God Is in His Holy Temple",
  "Father in Heaven",
  "I Believe in Christ",
  "My Redeemer Lives",
  "I Know That My Redeemer Lives",
  "Testimony",
  "Bless Our Fast, We Pray",
  "In Fasting We Approach Thee",
  "Did You Think to Pray?",
  "Jesus, the Very Thought of Thee",
  "Sweet Hour of Prayer",
  "Let the Holy Spirit Guide",
  "Secret Prayer",
  "Prayer Is the Soul's Sincere Desire",
  "Gently Raise the Sacred Strain",
  "Sweet Is the Work",
  "Sabbath Day",
  "As the Dew from Heaven Distilling",
  "O Thou Kind and Gracious Father",
  "We Meet, Dear Lord",
  "God Be with You Till We Meet Again",
  "Lord, We Ask Thee Ere We Part",
  "Father, This Hour Has Been One of Joy",
  "We Have Partaken of Thy Love",
  "Sing We Now at Parting",
  "Thy Spirit, Lord, Has Stirred Our Souls",
  "Before Thee, Lord, I Bow My Head",
  "Now the Day Is Over",
  "Softly Now the Light of Day",
  "The Lord Be with Us",
  "Lord, We Come before Thee Now",
  "Lord, Dismiss Us with Thy Blessing",
  "Great God, to Thee My Evening Song",
  "Abide with Me; 'Tis Eventide",
  "Abide with Me!",
  "Come, Let Us Sing an Evening Hymn",
  "As the Shadows Fall",
  "As Now We Take the Sacrament",
  "God, Our Father, Hear Us Pray",
  "With Humble Heart",
  "In Humility, Our Savior",
  "While of These Emblems We Partake",
  "While of These Emblems We Partake",
  "O God, the Eternal Father",
  "'Tis Sweet to Sing the Matchless Love",
  "'Tis Sweet To Sing the Matchless Love",
  "O Lord of Hosts",
  "Again, Our Dear Redeeming Lord",
  "Father in Heaven, We Do Believe",
  "Jesus of Nazareth, Savior and King",
  "We'll Sing All Hail to Jesus' Name",
  "In Remembrance of Thy Suffering",
  "Upon the Cross of Calvary",
  "Reverently and Meekly Now",
  "Again We Meet around the Board",
  "God Loved Us, So He Sent His Son",
  "Thy Will, O Lord, Be Done",
  "O Thou, Before the World Began",
  "In Memory of the Crucified",
  "Behold the Great Redeemer Die",
  "He Died! The Great Redeemer Died",
  "I Stand All Amazed",
  "There Is a Green Hill Far Away",
  "How Great the Wisdom and the Love",
  "Jesus, Once of Humble Birth",
  "O Savior, Thou Who Wearest a Crown",
  "That Easter Morn",
  "He Is Risen!",
  "Christ the Lord Is Risen Today",
  "Joy to the World",
  "Oh, Come, All Ye Faithful",
  "Angels We Have Heard on High",
  "Silent Night",
  "Once in Royal David's City",
  "Away in a Manger",
  "It Came upon the Midnight Clear",
  "O Little Town of Bethlehem",
  "Hark! The Herald Angels Sing",
  "With Wondering Awe",
  "While Shepherds Watched Their Flocks",
  "Far, Far Away on Judea's Plains",
  "The First Noel",
  "I Heard the Bells on Christmas Day",
  "Ring Out, Wild Bells",
  "We Are Sowing",
  "Come, Let Us Anew",
  "We Give Thee But Thine Own",
  "Because I Have Been Given Much",
  "Lord, I Would Follow Thee",
  "Dear to the Heart of the Shepherd",
  "Hear Thou Our Hymn, O Lord",
  "Have I Done Any Good?",
  "I Have Work Enough to Do",
  "We Are Marching On to Glory",
  "Improve the Shining Moments",
  "There Is Sunshine in My Soul Today",
  "You Can Make the Pathway Bright",
  "Today, While the Sun Shines",
  "Scatter Sunshine",
  "Father, Cheer Our Souls Tonight",
  "Let Us Oft Speak Kind Words",
  "Nay, Speak No Ill",
  "Jesus, Mighty King in Zion",
  "Should You Feel Inclined to Censure",
  "Lord, Accept into Thy Kingdom",
  "Do What Is Right",
  "Behold Thy Sons and Daughters, Lord",
  "Choose the Right",
  "Know This, That Every Soul Is Free",
  "Count Your Blessings",
  "Praise God, from Whom All Blessings Flow",
  "Let Us All Press On",
  "Come Along, Come Along",
  "This House We Dedicate to Thee",
  "Onward, Christian Soldiers",
  "We Love Thy House, O God",
  "Up, Awake, Ye Defenders of Zion",
  "Called to Serve",
  "We Are All Enlisted",
  "Behold! A Royal Army",
  "Put Your Shoulder to the Wheel",
  "Like Ten Thousand Legions Marching",
  "True to the Faith",
  "Carry On",
  "As Zion's Youth in Latter Days",
  "Rejoice! A Glorious Sound Is Heard",
  "O Thou Rock of Our Salvation",
  "Hope of Israel",
  "Who's on the Lord's Side?",
  "Thy Servants Are Prepared",
  "Go, Ye Messengers of Glory",
  "Go Forth with Faith",
  "Hark, All Ye Nations!",
  "Arise, O God, and Shine",
  "The Time Is Far Spent",
  "How Wondrous and Great",
  "Come, All Whose Souls Are Lighted",
  "Jehovah, Lord of Heaven and Earth",
  "I'll Go Where You Want Me to Go",
  "Oh, Holy Words of Truth and Love",
  "Oh Say, What Is Truth?",
  "Truth Reflects upon Our Senses",
  "The Iron Rod",
  "Men Are That They Might Have Joy",
  "Come Away to the Sunday School",
  "As I Search the Holy Scriptures",
  "Thanks for the Sabbath School",
  "Thy Holy Word",
  "Welcome, Welcome, Sabbath Morning",
  "Help Me Teach with Inspiration",
  "We Meet Again in Sabbath School",
  "The Glorious Gospel Light Has Shone",
  "If You Could Hie to Kolob",
  "God Moves in a Mysterious Way",
  "Oh, What Songs of the Heart",
  "Rise, Ye Saints, and Temples Enter",
  "How Beautiful Thy Temples, Lord",
  "Holy Temples on Mount Zion",
  "Rejoice, Ye Saints of Latter Days",
  "Turn Your Hearts",
  "O My Father",
  "Each Life That Touches Ours for Good",
  "Love at Home",
  "O Love That Glorifies the Son",
  "Our Father, by Whose Name",
  "From Homes of Saints Glad Songs Arise",
  "Home Can Be a Heaven on Earth",
  "Children of Our Heavenly Father",
  "Families Can Be Together Forever",
  "I Am a Child of God",
  "I Know My Father Lives",
  "Keep the Commandments",
  "Teach Me to Walk in the Light",
  "The Light Divine",
  "God's Daily Care",
  "In Our Lovely Deseret",
  "Love One Another",
  "As Sisters in Zion (Women)",
  "A Key Was Turned in Latter Days (Women)",
  "We Meet Again as Sisters (Women)",
  "We Ever Pray for Thee (Women)",
  "God Is Love (Women)",
  "How Gentle God's Commands (Women)",
  "Jesus, the Very Thought of Thee (Women)",
  "The Lord Is My Shepherd (Women)",
  "Sweet Is the Work (Women)",
  "Love at Home (Women)",
  "Ye Elders of Israel (Men)",
  "The Priesthood of Our Lord (Men)",
  "Ye Who Are Called to Labor (Men)",
  "Come, All Ye Sons of God (Men)",
  "Rise Up, O Men of God (Men's Choir)",
  "Rise Up, O Men of God (Men)",
  "See the Mighty Priesthood Gathered (Men's Choir)",
  "Come, Come, Ye Saints (Men's Choir)",
  "Go, Ye Messengers of Heaven (Men's Choir)",
  "An Angel from on High",
  "Thy Servants Are Prepared (Men's Choir)",
  "See, the Mighty Angel Flying (Men's Choir)",
  "Oh Say, What Is Truth? (Men's Choir)",
  "Come, O Thou King of Kings (Men's Choir)",
  "High on the Mountain Top (Men's Choir)",
  "I Need Thee Every Hour (Men's Choir)",
  "Brightly Beams Our Father's Mercy (Men's Choir)",
  "School Thy Feelings (Men's Choir)",
  "O Home Beloved (Men's Choir)",
  "America the Beautiful",
  "My Country, 'Tis of Thee",
  "The Star-Spangled Banner",
  "God Save the King"
];

function exportToExcel(){
  var html = document.querySelector("#output").innerHTML;
  var uri = 'data:application/vnd.ms-excel;base64,';
  var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
  var base64 = function(s) {
    return window.btoa(unescape(encodeURIComponent(s)))
  };

  var format = function(s, c) {
    return s.replace(/{(\w+)}/g, function(m, p) {
      return c[p];
    })
  };

  var ctx = {
    worksheet : 'Worksheet',
    table : html
  }

  var link = document.createElement("a");
  link.download = "Hymns.xls";
  link.href = uri + base64(format(template, ctx));
  link.click();
}