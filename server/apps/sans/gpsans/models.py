################################################################################
# GPSANS
################################################################################

from ..models import *

class GPSANSConfiguration(Configuration):
    
    absolute_scale_factor = models.DecimalField(
        max_digits=10, decimal_places=2, default=1.0)
    
    sample_aperture_diameter = models.DecimalField(
        max_digits=10, decimal_places=2, default=10.0)
    
    direct_beam_file = models.CharField(max_length=256, blank=True, help_text="File path")
    mask_file = models.CharField(max_length=256, blank=True, help_text="File path")
    dark_current_file = models.CharField(max_length=256, blank=True, help_text="File path")
    sensitivity_file = models.CharField(max_length=256, blank=True, help_text="File path")
        
    sensitivity_min = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.4)
    sensitivity_max = models.DecimalField(
        max_digits=10, decimal_places=2, default=2.0)
    

    @models.permalink
    def get_absolute_url(self):
        return ('sans:gpsans:configuration_detail', [self.pk])

class GPSANSReduction(Reduction):
    
    @models.permalink
    def get_absolute_url(self):
        return ('sans:gpsans:reduction_detail', [self.pk])

    # Needed to generate the script from this object
    script_file = os.path.join(os.path.dirname(os.path.abspath(__file__)),"scripts","template.py")


class GPSANSRegion(Region):
    # We can not have ForeignKey for abstract models. It has to be here!!
    empty_beam = models.CharField(max_length=256)

    reduction = models.ForeignKey(GPSANSReduction,
                                      on_delete=models.CASCADE,
                                      related_name="regions",
                                      related_query_name="region",)
    
    configuration = models.ForeignKey(GPSANSConfiguration, on_delete=models.CASCADE,
                                      related_name="regions",
                                      related_query_name="region")
    def __str__(self):
        return "Reduction {} -> Entry {}".format(self.reduction.title, self.region)