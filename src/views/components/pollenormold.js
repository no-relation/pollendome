// TODO: programmatically derive pollen or mold names from backend and database
// how do I connect this function to the redux store?

import { days_actions } from '../../state/actions/days_actions';
import { connect } from 'react-redux';

const _pollenOrMold = (name) => {
   
    const mold_names = ["acrodictys", "agrocybe", "algae", "alternaria", "arthimium", "ascomycetes", "asperisporium", "basidiomycetes", "beltrania", "botrytis", "cercospora", "cladosporium", "curvularia", "d_conidia_hyphae", "dendryphiella", "drechslera_helmintho", "dichotomophthora", "diplococcum", "epicoccum", "fusariella", "ganoderma", "helicomina", "microsporum", "misc_fungus_hyaline", "monodictys", "myxomycete_smut", "nigrospora", "penicillium_aspergillus", "periconia", "pestalotiopsis", "pithomyces", "powdery_mildew", "pseudocercospora", "puccinia", "rust", "spegazinia", "stemphyllium", "tetrapola", "tilletia", "torula"]
    
    const tree_pollen_names = ["alder", "ash", "ashe_juniper___bald_cypress", "black_gum", "black_walnut", "bushes", "birch", "cotton_wood", "dogwood", "elm", "glandular_mesquite", "hackberry", "hickory", "mulberry", "maple", "osage_orange", "oak", "sycamore", "pine", "privet", "sweet_gum", "gingko_biloba", "walnut", "willow", "willow", "other_tree", "cedar", "hazelnut", "plum_grannet", "walnutjuglans", "aster", "nettle", "magnolia", "wild_carrot", ]

    const weed_pollen_names = ["amaranth", "burweed___marshelder", "cattail", "dog_fennel", "lambs_quarters", "partridge_pea", "pigweed", "plantago", "ragweed", "rumex", "sagebrush", "saltbrush", "sedge", "sneezeweed", "other_weed"]

    // if (!this.props.specieses) {
    //     this.props.getSpecies()
    // }

    if (mold_names.includes(name)) {
        return 'mold'
    } else if (tree_pollen_names.includes(name) || (weed_pollen_names.includes(name))) {
        return 'pollen'
    } else {
        return "?"
    }
}

// const MapStateToProps = (state) => ({
//     specieses:  state.specieses

// })

export { pollenOrMold }
// = connect(MapStateToProps, days_actions)(_pollenOrMold)