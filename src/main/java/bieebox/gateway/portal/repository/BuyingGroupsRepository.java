package bieebox.gateway.portal.repository;

import bieebox.gateway.portal.domain.BuyingGroups;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the BuyingGroups entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BuyingGroupsRepository extends JpaRepository<BuyingGroups, Long> {

}
