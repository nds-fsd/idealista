import { useEffect } from "react";

import styles from "./RealEstates.module.css";



function RealEstatePrices(props) {
    const {priceMin, setPriceMin, priceMax, setPriceMax} = props;

    const princes = [ 
        { description: "Mín.", value: 0 },
        { description: "50.000 €", value: 50000 },
        { description: "100.000 €", value: 100000 },
        { description: "250.000 €", value: 250000 },
        { description: "500.000 €", value: 500000 },
        { description: "750.000 €", value: 750000 },
        { description: "1.000.000 €", value: 1000000 },
        { description: "1.500.000 €", value: 1500000 },
        { description: "2.000.000 €", value: 2000000 },
        { description: "3.000.000 €", value: 3000000 },
        { description: "Máx.", value: 999999999 }
    ];

    useEffect(() => {
        setPriceMin(priceMin);
        setPriceMax(priceMax);
    }, [])

    const handlerPriceMaxOnChange = (event) => {
        const price = Number(event.target.value);
        if (price >= priceMin) {
            setPriceMax(price)
        } else if (price < priceMin) {
            setPriceMin(price);
            setPriceMax(priceMin);
        }
    }

    const handlerPriceMinOnChange = (event) => {
        const price = Number(event.target.value);
        if (price <= priceMax) {
            setPriceMin(price);
        } else if (price > priceMax) {
            setPriceMin(priceMax);
            setPriceMax(price);
        }
    }

    return (
        <>
            <div>
                <select className={styles.select}  value={priceMin} onChange={handlerPriceMinOnChange}>
                    {princes.map((price) => {
                        return <option key={"pmin"+price.value} value={price.value}>{price.description}</option>
                    })}
                </select>
                <select className={styles.select} value={priceMax} onChange={handlerPriceMaxOnChange}>
                    {princes.map((price) => {
                        return <option key={"pmin"+price.value} value={price.value}>{price.description}</option>
                    })}
                </select>
            </div>   
        </>
    )
}

export default RealEstatePrices;