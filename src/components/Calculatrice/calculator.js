export const calcTauxRemise = (prixAchatNet, prixAchatBrut) => ((1 - (prixAchatNet/prixAchatBrut)) * 100.0)

export const calcPrixAchatNet = (prixAchatBrut, tauxRemise) => (prixAchatBrut + (prixAchatBrut*(-tauxRemise)/100.0))

export const calcPrixVenteNet = (prixAchatNet, coeffMultiplicateur) => (prixAchatNet * coeffMultiplicateur)

export const calcCoeffMultiplicateur = (prixVenteNet, prixAchatNet) => (prixVenteNet / prixAchatNet)

/*-	Taux de remise = (1 – Prix d’achat net / Prix d’achat brut) x 100
-	Prix d’achat net = Prix d’achat brut x (1 – taux de remise)
-	Prix de vente net = prix d’achat net x coefficient multiplicateur
-	Coefficient multiplicateur = Prix de vente net / Prix d’achat net*/
