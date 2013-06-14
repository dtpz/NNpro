package NNspring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import NNspring.entities.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {

}
