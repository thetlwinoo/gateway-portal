package bieebox.gateway.portal.repository;

import bieebox.gateway.portal.domain.UnitMeasure;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the UnitMeasure entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UnitMeasureRepository extends JpaRepository<UnitMeasure, Long> {

}
