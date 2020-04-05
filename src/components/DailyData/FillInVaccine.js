import "./index.scss"

import React, { useState } from "react";

const vaccineType = ['NDIB', 'IBD'];
const vitaminType = ['Cal-D-Phos', 'Lovit Phos', 'Super San', 'A V Leaf', 'Lava San', 'T Mix', 'Pro 7 Plus', 'Far C 12', 'Tilo San'];

export const FillInVaccine = () => {
    //const [vaccine, setVaccine] = useState('Select Tyep');

    return (
        <form>
            {vaccineType.map((eachVaccineType) => {
                return (
                    <div class="form-check">
                        <input class="form-check-input-vaccine" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            {eachVaccineType}
                        </label>
                    </div>
                )
            })}
            {vitaminType.map((eachVitaminType) => {
                return (
                    <div class="form-check">
                        <input class="form-check-input-vaccine" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            {eachVitaminType}
                        </label>
                    </div>
                )
            })}
        </form>
    );
}


