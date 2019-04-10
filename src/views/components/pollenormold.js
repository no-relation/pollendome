// TODO: programmatically derive pollen or mold names from backend and database
const pollenOrMold = (name) => {
   
    const mold_names = ["acrodictys", "agrocybe", "algae", "alternaria", "arthimium", "ascomycetes", "asperisporium", "basidiomycetes", "beltrania", "botrytis", "cercospora", "cladosporium", "curvularia", "d_conidia_hyphae", "dendryphiella", "drechslera_helmintho", "dichotomophthora", "diplococcum", "epicoccum", "fusariella", "ganoderma", "helicomina", "microsporum", "misc_fungus_hyaline", "monodictys", "myxomycete_smut", "nigrospora", "penicillium_aspergillus", "periconia", "pestalotiopsis", "pithomyces", "powdery_mildew", "pseudocercospora", "puccinia", "rust", "spegazinia", "stemphyllium", "tetrapola", "tilletia", "torula"]
    
    const pollen_names = ["ash", "birch", "cotton_wood", "dogwood", "elm", "glandular_mesquite", "hackberry", "hickory", "mulberry", "maple", "osage_orange", "oak", "sycamore", "pine", "privet", "sweet_gum", "gingko_biloba", "amaranth", "burweed___marshelder", "cattail", "dog_fennel", "lambs_quarters", "ragweed", "rumex", "sagebrush", "saltbrush", "sedge", "ashe_juniper___bald_cypress", "bushes", "willow", "sneezeweed", "black_gum", "other_weed", "other_tree", "plantago", "partridge_pea", "black_walnut", "pigweed", "alder", "cedar", "hazelnut", "plum_grannet", "walnutjuglans", "aster", "nettle", "walnut", "magnolia", "wild_carrot", "willow"]

    if (mold_names.includes(name)) {
        return 'mold'
    } else if (pollen_names.includes(name)) {
        return 'pollen'
    } else {
        return "?"
    }
}

export { pollenOrMold }