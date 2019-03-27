package bieebox.gateway.portal.repository;

import bieebox.gateway.portal.domain.StockItemStockGroups;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the StockItemStockGroups entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StockItemStockGroupsRepository extends JpaRepository<StockItemStockGroups, Long> {

}
