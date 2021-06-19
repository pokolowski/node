export const getMenu = (req, res) => {
    res.json({
        danie: {
            id1: 'kotlet schabowy z frytkami',
            cena_id1: '22 zł',
            id2: 'ryba filet z dorsza z frytkami i surówką',
            cena_id2: '30 zł',
            id3: 'ryba łosoś z frytkami i surówką',
            cena_id3: '35 zł',
            id4: 'nuggetsy z frytkami',
            cena_id4: '17 zł',
        },
        pizza: {
            id1: 'Margherita',
            cena_id1: '15 zł',
            id2: 'Peperoni',
            cena_id2: '18,90 zł',
            id3: 'Prosciutto',
            cena_id3: '18 zł',
            id4: 'Chorizo',
            cena_id4: '26,90 zł',
            id5: 'Italiana',
            cena_id5: '26,90 zł',
            id6: 'Vegana',
            cena_id6: '20,90 zł',
            id7: 'Carbonara',
            cena_id7: '25,90 zł',
        },
        makarony: {
            id1: 'Spaghetti Bolognese',
            cena_id1: '14,90 zł',
            id2: 'Spaghetti Aglio E Olio',
            cena_id2: '12,90 zł',
            id3: 'Spaghetti Carbonara',
            cena_id3: '18,90 zł',
            id4: 'Tagiatelle Crudo',
            cena_id4: '28,90 zł',
        },
        desery: {
            id1: 'Brownie',
            cena_id1: '15,90 zł',
            id2: 'Lody z szarlotką',
            cena_id2: '14 zł',
            id3: 'Tiramisu',
            cena_id3: '15,90 zł',
        },
        przystawki: {
            id1: 'Focaccia',
            cena_id1: '9,90 zł',
            id2: 'Antipasti dla 2 osób',
            cena_id2: '18,90 zł',
        },
        napoje: {
            id1: 'Piwo z kija',
            cena_id1: '7 zł',
            id2: 'Coca Cola',
            cena_id2: '5 zł',
            id3: 'Pepsi',
            cena_id3: '5 zł',
            id4: 'Ice Tea',
            cena_id4: '5 zł',
        },
    });
};