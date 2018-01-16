--
-- Déchargement des données de la table `utilisateur`
--

-- role : ADMIN/AGENT_BUREAU_ORDRE/SECRETAIRE/RESPONSABLE
INSERT INTO `utilisateur` (`id`, `login`, `mot_passe`, `nom`, `prenom`, `email`, `role`, `id_entite`) VALUES
(1, 'admin', '123456', 'Administrateur', 'Administrateur', 'admin@exemple.com', 'ADMIN', 0);