package bieebox.gateway.portal.repository;

import bieebox.gateway.portal.domain.Colors;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Colors entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ColorsRepository extends JpaRepository<Colors, Long> {

}
