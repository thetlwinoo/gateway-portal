package bieebox.gateway.portal.repository;

import bieebox.gateway.portal.domain.PaymentMethods;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the PaymentMethods entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PaymentMethodsRepository extends JpaRepository<PaymentMethods, Long> {

}
