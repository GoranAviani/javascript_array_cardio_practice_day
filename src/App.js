const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
    {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
    {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
    {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
    {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const morePeople = [
    {name: 'Dante', year: 1988},
    {name: 'Randall', year: 1987},
    {name: 'Bob', year: 1944},
    {name: 'Jay', year: 2016}
];

const comments = [
    {text: 'There was salt on the glass, BIG grains of salt', id: 293847},
    {text: 'A schooner is a sailboat', id: 189820},
    {text: 'Do ya like dogs?', id: 123900},
    {text: "I wasn't even supposed to be here today", id: 37},
    {text: 'Luminous beings we are, not this crude matter', id: 823423}
];


function App() {

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const result1 = inventors.filter(inventor => inventor.year > 1500 && inventor.year < 1600)
    console.table(result1)
    const displayResult1 = result1.map(res => <p>{res.first} {res.last} {res.year} {res.passed}</p>)

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    const result2 = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    console.table(result2)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const result3 = inventors.sort((first, second) => first.year > second.year ? 1 : -1)
    console.table(result3)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const initialState = 0
    const result4 = inventors.reduce((sumOfValues, currentValue) => sumOfValues + (currentValue.passed - currentValue.year), initialState)
    console.log(result4)

    // 5. Sort the inventors by years lived
    const result5 = inventors.sort((prevInventor, currInventor) => (prevInventor.passed - prevInventor.year) > (currInventor.passed - currInventor.year) ? 1: -1)
    console.table(result5)


    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // change to person array

    return (
        <div>
            {displayResult1}
        </div>
    );
}

export default App;
