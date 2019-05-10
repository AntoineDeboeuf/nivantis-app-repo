import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { calcTauxRemise, calcPrixAchatNet, calcPrixVenteNet, calcCoeffMultiplicateur } from './calculator'

const Calculatrice = () => {

  const [tauxRemise, setTauxRemise] = useState('')
  const [prixAchatNet, setPrixAchatNet] = useState('')
  const [prixAchatBrut, setPrixAchatBrut] = useState('')
  const [prixVenteNet, setPrixVenteNet] = useState('')
  const [coeffMultiplicateur, setCoeffMultiplicateur] = useState('')

  const onTauxRemiseChange = (element) => setTauxRemise(parseFloat(element.target.value))
  const onPrixAchatNetChange = (element) => setPrixAchatNet(parseFloat(element.target.value))
  const onPrixAchatBrutChange = (element) => setPrixAchatBrut(parseFloat(element.target.value))
  const onPrixVenteNetChange = (element) => setPrixVenteNet(parseFloat(element.target.value))
  const onCoeffMultiplicateurChange = (element) => setCoeffMultiplicateur(parseFloat(element.target.value))

  const onTauxRemiseClick = () => setTauxRemise(calcTauxRemise(prixAchatNet, prixAchatBrut))
  const onPrixAchatNetClick = () => setPrixAchatNet(calcPrixAchatNet(prixAchatBrut, tauxRemise))
  const onPrixVenteNetClick = () => setPrixVenteNet(calcPrixVenteNet(prixAchatNet, coeffMultiplicateur))
  const onCoeffMultiplicateurClick = () => setCoeffMultiplicateur(calcCoeffMultiplicateur(prixVenteNet, prixAchatNet))
  const onRAZClick = () => { setCoeffMultiplicateur(""); setPrixAchatBrut(""); setPrixAchatNet(""); setTauxRemise(""); setPrixVenteNet("") }

  return (
    <div>
      <div>
        <Grid container direction="column" justify="flex-start" alignItems="center">
          <ListSubheader component="div">Entrez vos valeurs :</ListSubheader>
          <Grid item>
            <TextField
              label="Prix d'achat net"
              type="number"
              value={prixAchatNet}
              onChange={onPrixAchatNetChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Prix d'achat brut"
              type="number"
              value={prixAchatBrut}
              onChange={onPrixAchatBrutChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Prix de vente net"
              type="number"
              value={prixVenteNet}
              onChange={onPrixVenteNetChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Taux de remise"
              type="number"
              value={tauxRemise}
              onChange={onTauxRemiseChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Coefficient Multiplicateur"
              type="number"
              value={coeffMultiplicateur}
              onChange={onCoeffMultiplicateurChange}
            />
          </Grid>
        </Grid>
      </div>
      <br/>
      <div>
        <Grid container direction="column" justify="center" alignItems="stretch">
          <Grid item>
            <Button variant="contained" fullWidth color="primary" disabled={!(prixAchatBrut && tauxRemise)} onClick={onPrixAchatNetClick}>Calculer le prix d'achat net</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" fullWidth color="primary" disabled={!(prixAchatNet && coeffMultiplicateur)} onClick={onPrixVenteNetClick}>Calculer le prix de vente net</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" fullWidth color="primary" disabled={!(prixAchatNet && prixAchatBrut)} onClick={onTauxRemiseClick}>Calculer le taux de remise</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" fullWidth color="primary" disabled={!(prixVenteNet && prixAchatNet)} onClick={onCoeffMultiplicateurClick}>Calculer le coefficient multiplicateur</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" fullWidth color="primary" onClick={onRAZClick}>Remise à zero</Button>
          </Grid>
        </Grid>
      </div>

      <div>
        {prixAchatNet && (
          <div>
            Prix d'achat net: {prixAchatNet}
          </div>
        )}
        {prixAchatBrut && (
          <div>
            Prix d'achat brut: {prixAchatBrut}
          </div>
        )}
        {prixVenteNet && (
          <div>
            Prix de vente net: {prixVenteNet}
          </div>
        )}
        {tauxRemise && (
          <div>
            Taux de remise: {tauxRemise}
          </div>
        )}
        {coeffMultiplicateur && (
          <div>
            Coefficient Multiplicateur: {coeffMultiplicateur}
          </div>
        )}
      </div>
    </div>
  )
}

export default Calculatrice