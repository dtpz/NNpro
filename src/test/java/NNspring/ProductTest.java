package NNspring;

import static org.junit.Assert.*;

import NNspring.entities.ProductType;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import NNspring.entities.Product;

import java.util.EnumSet;

public class ProductTest {

    @Autowired
    private Product product;

    @Test
    public void test(){
        Product prod=new Product(123,"Tylenol", ProductType.OTC,"cat","dep","subdep");

        assertEquals(prod.getCategory(),"cat");
        assertEquals(prod.getName(),"Tylenol");
        EnumSet set=EnumSet.allOf(ProductType.class);
        assertTrue(set.contains(prod.getType()));
    }

}
