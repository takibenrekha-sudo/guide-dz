
# Guide des Médicaments Algérie 2025 - Configuration Email

Pour recevoir les commandes directement par email, suivez exactement ces 3 étapes :

## 1. Créer votre point de réception (Gratuit)
1. Allez sur [Formspree.io](https://formspree.io/) et créez un compte.
2. Cliquez sur **"New Form"**.
3. Donnez-lui un nom (ex: "Commandes Livre Médicaments").
4. Dans le champ "Send emails to", mettez votre adresse email personnelle.
5. Une fois le formulaire créé, cherchez votre **"Form ID"** (c'est une suite de lettres/chiffres comme `mqkoqvqp`).

## 2. Activer la liaison dans le code
1. Ouvrez le fichier `App.tsx`.
2. Tout en haut, cherchez la ligne : `const FORMSPREE_ID = 'votre_id_ici';`.
3. Remplacez `votre_id_ici` par votre ID Formspree.

## 3. Tester la réception
1. Allez sur votre site.
2. Remplissez le formulaire de commande avec des informations de test.
3. Cliquez sur **"Confirmer ma commande"**.
4. Vérifiez votre boîte mail (et vos spams la première fois). Vous devriez recevoir un email structuré avec :
   - Le nom du client
   - Son numéro de téléphone
   - Sa Wilaya
   - Son adresse exacte
   - La quantité voulue

---

### Informations Techniques Supplémentaires
- **Sujet de l'email** : Automatiquement formaté pour inclure le nom du client et la wilaya.
- **Validation** : Le formulaire vérifie que les champs obligatoires sont remplis avant l'envoi.
- **Confirmation** : Un message de succès s'affiche au client après l'envoi réussi.
