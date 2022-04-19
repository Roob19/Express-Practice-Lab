const dreamCars = [
    {model: 'Rat-Rod', year: 1923},
    {model: 'Ford', year: 1932},
    {model: 'Buggatti La Voiture Noire', year: 2021},
    {model: 'Toyota SR5', year: 1979},
    {model: 'VW-Bus', year: 1968},
    {model: 'Lexus-LFA', year: 2012},
    {model: 'ALL\'EM', year: 0}
];

module.exports = {
    getAll: function() {
        return dreamCars;
    }
};