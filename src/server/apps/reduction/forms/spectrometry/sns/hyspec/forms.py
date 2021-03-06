import logging

from django.forms import ModelForm, inlineformset_factory

from crispy_forms.layout import HTML, Div, Field, Fieldset
from crispy_forms.bootstrap import AppendedText, PrependedText

from server.apps.reduction.models.spectrometry.sns.hyspec import Reduction, Region
from server.apps.reduction.forms import abstract


logger = logging.getLogger(__name__)  # pylint: disable=C0103


class ReductionForm(abstract.ReductionForm, ModelForm):
    def __init__(self, *args, **kwargs):
        super(ReductionForm, self).__init__(*args, **kwargs)
        # super().__init__(*args, **kwargs)

        start = 3
        # Cell
        self.helper[start:start+6].wrap(Div, css_class="col-md-12")
        self.helper[start:start+6].wrap(Div, css_class="col-md-2")
        self.helper[start:start+6].wrap_together(Div, css_class="row")
        # Vectors
        self.helper[start+1:start+3].wrap(Div, css_class="col-md-12")
        self.helper[start+1:start+3].wrap(Div, css_class="col-md-6")
        self.helper[start+1:start+3].wrap_together(Div, css_class="row")
        # # # Projections
        self.helper[start+2:start+5].wrap(Div, css_class="col-md-12")
        self.helper[start+2:start+5].wrap(Div, css_class="col-md-4")
        self.helper[start+2:start+5].wrap_together(Div, css_class="row")

    class Meta(abstract.ReductionForm.Meta):
        model = Reduction


class ReductionScriptForm(abstract.ReductionScriptForm, ModelForm):
    class Meta(abstract.ReductionScriptForm.Meta):
        model = Reduction


class RegionForm(abstract.RegionForm, ModelForm):
    def __init__(self, *args, **kwargs):
        # super(RegionForm, self).__init__(*args, **kwargs)
        super().__init__(*args, **kwargs)
        # self.helper.template = 'bootstrap/table_inline_formset.html'

        self.helper[1].wrap(Div, css_class="col-md-12")

        self.helper[2:6].wrap(Div, css_class="col-md-12")
        self.helper[2:6].wrap(Div, css_class="col-md-3")
        self.helper[2:6].wrap_together(Div, css_class="row")

        self.helper[3:7].wrap(Div, css_class="col-md-12")
        self.helper[3:7].wrap(Div, css_class="col-md-3")
        self.helper[3:7].wrap_together(Div, css_class="row")

        self.helper[4:7].wrap(Div, css_class="col-md-12")
        self.helper[4:7].wrap(Div, css_class="col-md-3")
        self.helper[4:7].wrap_together(Div, css_class="row")

        self.helper[5:8].wrap(Div, css_class="col-md-12")
        self.helper[5:8].wrap(Div, css_class="col-md-3")
        self.helper[5:8].wrap_together(Div, css_class="row")

        # This to add the delete button
        #self.helper.layout.append(Field("DELETE"))
        self.helper.layout.append(AppendedText("DELETE", '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>'))
        #self.helper.layout.append(Div("DELETE", HTML('<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>')))

        
        self.helper[len(self.helper.layout)-1].wrap(
            Div, css_class="col-md-12 text-right")
        # This adds a ruller at the end
        self.helper.layout.append(HTML("""<hr class="col-xs-12">"""))

        # self.helper.layout.extend(['ORDER', 'DELETE'])
        # Wrap all in div so I can identify a formset in JS
        self.helper.all().wrap_together(Div, css_class="a-formset")

    class Meta(abstract.RegionForm.Meta):
        model = Region


# New
# pylint: disable=C0103
RegionInlineFormSetCreate = inlineformset_factory(
    Reduction,
    Region,
    form=RegionForm,
    extra=1,
    min_num=0,
    can_delete=True
)

# Edit
# pylint: disable=C0103
RegionInlineFormSetUpdate = inlineformset_factory(
    Reduction,
    Region,
    form=RegionForm,
    extra=1,
    min_num=0,
    can_delete=True
)
