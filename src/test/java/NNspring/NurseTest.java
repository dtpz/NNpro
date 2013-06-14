package NNspring;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import NNspring.entities.Nurse;

import java.util.Date;

public class NurseTest {
    @Autowired
    Nurse nurse;


    @Test
    public void test() {

        this.nurse=new Nurse("last","first",123);

        assertNotNull(this.nurse);
        assertEquals(nurse.getFirstName(),"first");
        assertEquals(nurse.getLastName(),"last");
        assertEquals(nurse.getId(),123);

    }
}
