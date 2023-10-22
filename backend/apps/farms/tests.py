import unittest
from apps.farms.api.viewsets import FarmViewset
from rest_framework.response import Response
from rest_framework.test import APIRequestFactory



class TestFarmViewsets(unittest.TestCase):
    # Validar que la clase exista
    # def class_exists(self):
    #     self.assertTrue(hasattr(viewsets, 'farmViewset'), msg='Class  farmViewset does not exist')
    #     self.assertIsNone(viewsets.FarmViewset.__doc__, msg=' class farmViewset does not have a docstring')
    #validar que el metodo create exista
    #validar que la funcion tenga docstring
    def test_Create_Viewset(self):
        response = FarmViewset().create()
        
        # verify that the function create exists
        self.assertTrue(hasattr(FarmViewset, 'create'), msg='function create does not exist')
        # verify that the function create has a docstring
        self.assertIsNone(FarmViewset.create().__doc__, msg=' function create does not have a docstring')
        # self.assertTrue(issubclass(FarmViewset, viewsets.GenericViewSet), msg='Class FarmViewset does not inherit from GenericsViewSet')
        # verify that the serializer_class and permission_classes attributes exist
        self.assertTrue(hasattr(FarmViewset, 'serializer_class'), msg='serializer_class does not exist')
        self.assertTrue(hasattr(FarmViewset, 'permission_classes'), msg='permission_classes does not exist')
        # verify the response is an response object
        self.assertIsInstance(response, Response, msg='response is not an instance of Response')
        # verify status code is 201
        self.assertEqual(response.status_code, 201, msg='status code is not 201')
        #veriry that the response is a json
        self.assertDictEqual(response.data, {'key':'value'}, msg='return is not a json')
    
    def test_create_request(self):
        """
        The function `test_create_request` tests the creation of a new farm object using the APIRequestFactory and asserts that the response status code is 201.
        """
        factory = APIRequestFactory()
        request = factory.post('/farms/', {'key':'value'})
        response = FarmViewset().create(request)
        self.assertEqual(response.status_code, 201)
        




# validar que la clase herede de GenericsVIewset
# validar que el serializer exista
#validar que el serializer herede de serializer
# validar que la clase herede de GenericsViewSet




#validar que el metodo list exista
#validar que el metodo retrieve exista
#validar que el metodo update exista


 

# if __name__ == '__main__':
#     unittest.main()
