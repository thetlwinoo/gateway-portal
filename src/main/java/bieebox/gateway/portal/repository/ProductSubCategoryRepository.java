package bieebox.gateway.portal.repository;

import bieebox.gateway.portal.domain.ProductSubCategory;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ProductSubCategory entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductSubCategoryRepository extends JpaRepository<ProductSubCategory, Long> {

}
