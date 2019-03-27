package bieebox.gateway.portal.repository;

import bieebox.gateway.portal.domain.InvoiceLines;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the InvoiceLines entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InvoiceLinesRepository extends JpaRepository<InvoiceLines, Long> {

}
