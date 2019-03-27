package bieebox.gateway.portal.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import bieebox.gateway.portal.domain.Products;

@Repository
public interface SpringReadFileRepository extends CrudRepository<Products,Integer> {
}
