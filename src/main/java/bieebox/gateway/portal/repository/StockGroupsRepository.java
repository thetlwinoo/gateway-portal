package bieebox.gateway.portal.repository;

import bieebox.gateway.portal.domain.StockGroups;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the StockGroups entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StockGroupsRepository extends JpaRepository<StockGroups, Long> {

}
