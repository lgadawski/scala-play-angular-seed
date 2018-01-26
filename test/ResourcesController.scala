import org.scalatest.mockito.MockitoSugar
import org.scalatestplus.play.PlaySpec
import org.scalatestplus.play.guice.GuiceOneAppPerTest
import play.api.test.{Helpers, Injecting}

class ResourcesController extends PlaySpec with GuiceOneAppPerTest with Injecting with MockitoSugar {

  "ResourcesController GET" should {

    "get all resources list" in {
      val controller = new ResourcesController(repo, Helpers.stubControllerComponents())
    }

  }

}
