package bieebox.gateway.portal.repository;

import bieebox.gateway.portal.domain.PurchaseOrderLines;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the PurchaseOrderLines entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PurchaseOrderLinesRepository extends JpaRepository<PurchaseOrderLines, Long> {

}
